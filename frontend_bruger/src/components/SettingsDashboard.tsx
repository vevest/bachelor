import { useEffect, useState } from "react";
import { Card } from "webcoreui/react";
import CheckboxCard from "./CheckboxCard";
import LanguageSelect from "./LanguageSelect";
import { getSetting, setSetting } from "../utils/localDB";
import { situations } from "../types/situation.type";
import { accommodations } from "../types/accommodation.type";
import type { localSettings } from "../types/localStettings.type";

export default function SettingsDashboard() {
  const [settings, setSettings] = useState<localSettings | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadSettings() {
      const [language, situation, savedAccommodations] = await Promise.all([
        getSetting("language"),
        getSetting("situation"),
        getSetting("accommodations"),
      ]);

      setSettings({
        language: language ?? "en",
        situation: situation ?? {},
        accommodations: savedAccommodations ?? {},
      });
    }

    void loadSettings().catch((error) => {
      console.error(error);
      setError(true);
    });
  }, []);

  if (error) return <p>Could not load settings. Please reload the page.</p>;
  if (!settings) return <p>Loading settings…</p>;

  return (
    <section>
      <Card title="Language" secondary>
        <LanguageSelect
          value={settings.language}
          onChange={(key, value) => {
            void setSetting(key, value).catch(console.error);
          }}
        />
      </Card>

      <Card title="Your situation" secondary>
        {situations.map((situation) => (
          <CheckboxCard
            key={situation.id}
            label={situation.label}
            value={situation.id}
            type="situation"
            checked={settings.situation[situation.id] ?? false}
          />
        ))}
      </Card>

      <Card title="What you need" secondary>
        {accommodations.map((accommodation) => (
          <CheckboxCard
            key={accommodation.id}
            label={accommodation.label}
            value={accommodation.id}
            type="accommodations"
            checked={settings.accommodations[accommodation.id] ?? false}
          />
        ))}
      </Card>
    </section>
  );
}
