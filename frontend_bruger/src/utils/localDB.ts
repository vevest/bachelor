import type { localSettings } from "../types/localStettings.type";

export function openSettingsDb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open("local-settings", 1);

    request.onupgradeneeded = () => {
      request.result.createObjectStore("settings");
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function withSettings<T>(
  mode: IDBTransactionMode,
  run: (store: IDBObjectStore) => IDBRequest<T>,
): Promise<T> {
  const db = await openSettingsDb();

  try {
    return await new Promise<T>((resolve, reject) => {
      const transaction = db.transaction("settings", mode);
      const request = run(transaction.objectStore("settings"));

      transaction.oncomplete = () => resolve(request.result);
      transaction.onabort = () =>
        reject(transaction.error ?? new Error("Settings transaction aborted"));
    });
  } finally {
    db.close();
  }
}

export function getSetting<K extends keyof localSettings>(
  key: K,
): Promise<localSettings[K] | undefined> {
  return withSettings("readonly", (store) => store.get(key));
}

export async function setSetting<K extends keyof localSettings>(
  key: K,
  value: localSettings[K],
): Promise<void> {
  await withSettings("readwrite", (store) => store.put(value, key));
}

export async function setCheckboxSetting(
  key: "situation" | "accommodations",
  id: string,
  checked: boolean,
): Promise<void> {
  const current = await getSetting(key);

  await setSetting(key, {
    ...current,
    [id]: checked,
  });
}