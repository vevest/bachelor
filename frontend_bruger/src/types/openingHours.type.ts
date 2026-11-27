export type Weekday = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type OpeningInterval = {
  opens: string; // Local time, HH:mm
  closes: string; // Local time, HH:mm
};

export type OpeningHours = {
  weekly: Record<Weekday, OpeningInterval[]>;
  overrides?: Partial<Record<string, OpeningInterval[]>>; // Local YYYY-MM-DD
};
