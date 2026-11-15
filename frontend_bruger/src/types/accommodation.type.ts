export type accommodation = {
  id: string;
  label: string;
  iconPath?: string;
};

export const accommodations: accommodation[] = [
  { id: "food", label: "A hot meal" },
  { id: "shelter", label: "A place to sleep" },
  { id: "shower", label: "A shower" },
  { id: "laundry", label: "A place to wash clothes" },
  { id: "clothing", label: "Clean clothes" },
  { id: "healthcare", label: "Medical care" },
  { id: "guidance", label: "Advice and guidance" },
  { id: "internet", label: "Internet access" },
];
