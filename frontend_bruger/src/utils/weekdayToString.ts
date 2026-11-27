import type { Weekday } from "../types/openingHours.type";

export function weekdayToString(weekday: Weekday) {
  /* TODO: tilføj kode til at snakke med oversættelsen i db */
  const dictionary = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
  return dictionary[weekday];
}
