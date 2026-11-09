import { useEffect, useState } from "react";
import Stepcounter from "./Stepcounter";
import { Button, Icon } from "webcoreui/react";

export default function IntroSequence() {
  const [stepcount, setStepcount] = useState(0);

  useEffect(() => {
    console.log(stepcount);
  }, [stepcount]);
  return (
    <>
      <Button
        onClick={() => {
          setStepcount(stepcount + 1);
        }}
      >
        next <Icon type="chevron-right"></Icon>
      </Button>

      {stepcount > -1 ? <Stepcounter step={stepcount} /> : false}
    </>
  );
}
