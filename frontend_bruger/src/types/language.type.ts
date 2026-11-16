import { flags } from "../../public/icons/icons";
export type language = {
  dbIndex: number;
  languageCode: string;
  icon: string;
  title: string;
};

export const languages: language[] = [
  {
    dbIndex: 1,
    languageCode: "da",
    icon: flags.da,
    title: "Dansk",
  },
  {
    dbIndex: 2,
    languageCode: "en",
    icon: flags.en,
    title: "English",
  },
  {
    dbIndex: 3,
    languageCode: "es",
    icon: flags.es,
    title: "Español",
  },
  {
    dbIndex: 4,
    languageCode: "po",
    icon: flags.po,
    title: "Polski",
  },
  {
    dbIndex: 5,
    languageCode: "ro",
    icon: flags.ro,
    title: "Română",
  },
];
