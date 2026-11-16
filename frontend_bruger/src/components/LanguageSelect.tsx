import { Select } from "webcoreui/react";
import { languages, type language } from "../types/language.type";
const list = languages.map((language: language) => {
  return {
    name: language.title,
    value: language.languageCode,
    icon: language.icon,
    subText: language.title,
  };
});
type languageSelectProps={
  onChange:any;
}
export default function LanguageSelect(props:languageSelectProps) {
  return (
    <Select
      name="selectLanguage"
      label="Select your Language"
      itemGroups={[{ items: list }]}
      required={true}
      showSearchBar={false}
      showSearchBarIcon={false}
      onChange={(e) => {
        props.onChange("language", e.value);
      }}
    />
  );
}
