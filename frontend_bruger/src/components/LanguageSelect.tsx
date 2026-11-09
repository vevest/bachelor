import { Select } from "webcoreui/react";
import da from "/icons/languages/da.svg?raw";
import en from "/icons/languages/en.svg?raw";

const list = [
  {
    items: [
      {
        name: "Dansk",
        value: "da",
        icon: da,
        subText: "(Danish)",
      },
      {
        name: "English",
        value: "en",
        icon: en,
        subText: "(English)",
      },
    ],
  },
];

export default function LanguageSelect() {
  return (
    <Select
      name="selectLanguage"
      label="Select your Language"
      itemGroups={list}
      required={true}
      showSearchBar={false}
      showSearchBarIcon={false}
      onChange={(event) => console.log(event)}
      onClose={(event) => console.log(event)}
    />
  );
}
