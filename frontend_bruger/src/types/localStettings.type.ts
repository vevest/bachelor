export type localSettings = {
  language: string;
  situation: Record<string, boolean>;
  accommodations: Record<string, boolean>;
};
export const localBaseSettings: localSettings = {
  language: "en",
  situation: {
    "no-cpr": false,
    homeless: false,
    jobless: false,
    substances: false,
    undocumented: false,
    "someone-else": false,
  },
  accommodations: {},
};
