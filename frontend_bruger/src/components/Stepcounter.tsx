import { useEffect, useState } from "react";
import { Stepper } from "webcoreui/react";

export default function Stepcounter({ step }: { step: number }) {
  const [steps, setSteps] = useState([
    { title: "Language", active: false, completed: false },
    { title: "Situation", active: false, completed: false },
    { title: "Accommodations", active: false, completed: false },
  ]);

  useEffect(() => {
    if (step > 2) {
      return;
      //TODO gem preferences of redirect til feed
    }
    if (step != undefined) {
      const newSteps = [...steps];
      newSteps[step].active = true;
      step > 0 ? (newSteps[step - 1].completed = true) : false;
      setSteps(newSteps);
    }
  }, [step]);

  return <Stepper items={steps} vertical={false} className="intro-stepper" />;
}
