import { useEffect, useState } from "react";
import type { OpeningHours, Weekday } from "../types/openingHours.type";
import { Badge,Flex } from "webcoreui/react";

export default function OpeningHoursToday({openingHours}: {openingHours:OpeningHours},) {
  const [todaysOpeningHours, setTodaysOpeningHours] = useState([
    { opens: "", closes: "" },
  ]);
  useEffect(() => {
    const today = new Date(Date.now());
    const weekday: Weekday = today.getDay() as Weekday;
    setTodaysOpeningHours(openingHours.weekly[weekday]);
  }, []);
  return (
    <Flex>
      {todaysOpeningHours.map((hours) => {
        return (
          <Badge>
            {hours.opens}-{hours.closes}
          </Badge>
        );
      })}
    </Flex>
  );
}
