import { Select } from "webcoreui/react";
import { languages, type language } from "../types/language.type";
import { useState } from "react";
const list = languages.map((language: language) => {
  return {
    name: language.title,
    value: language.languageCode,
    icon: language.icon,
    subText: language.title,
  };
});
type languageSelectProps = {
  value?: string;
  onChange: (key: "language", value: string) => void;
};
export default function LanguageSelect(props: languageSelectProps) {
  const [language, setLanguage] = useState(props.value ?? "en");

  return (
    <Select
      key={language}
      name="selectLanguage"
      label="Select your Language"
      value={language}
      itemGroups={[{ items: list }]}
      required={true}
      showSearchBar={false}
      showSearchBarIcon={false}
      onChange={(e) => {
        setLanguage(e.value);
        props.onChange("language", e.value);
      }}
    />
  );
}
