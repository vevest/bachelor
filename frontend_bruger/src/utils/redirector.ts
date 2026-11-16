import { settingsValid } from "./localDB";

export async function redirect() {
  if (await settingsValid()) {
  window.location.href = "/feed";
} else {
  window.location.href = "/intro";
}

}
