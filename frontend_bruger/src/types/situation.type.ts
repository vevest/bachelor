export type situation = {
  id: string;
  label: string;
  iconPath?: string;
};

export const situations:situation[] = [
  { id: "no-cpr", label: "No CPR number" },
  { id: "homeless", label: "Need a place to stay" },
  { id: "jobless", label: "Need work support" },
  { id: "substances", label: "Substance support" },
  { id: "undocumented", label: "No residence papers" },
  { id: "someone-else", label: "Helping someone else" },
];
