import { useEffect, useState } from "react";
import Stepcounter from "./Stepcounter";
import { Button, Card, Icon } from "webcoreui/react";
import LanguageSelect from "./LanguageSelect";
import CheckboxCard from "./CheckboxCard";

export default function IntroSequence() {
  const [stepcount, setStepcount] = useState(0);

  useEffect(() => {
    console.log(stepcount);
  }, [stepcount]);
  return (
    <>
      <section>
        {stepcount == 0 ? (
          <>
            <Card title="Welcome" secondary={true}>
              Please choose your prefered language below
            </Card>
            <LanguageSelect></LanguageSelect>
          </>
        ) : (
          false
        )}
        {stepcount == 1 ? (
          <>
            <Card title="Welcome" secondary={true}>
              Please tell us about applies to your current situation
            </Card>
            <Card>
              <CheckboxCard label="homeless" name="homeless"></CheckboxCard>
              <CheckboxCard label="no cpr number" name="noCpr"></CheckboxCard>
              <CheckboxCard label="jobless" name="jobless"></CheckboxCard>
            </Card>
          </>
        ) : (
          false
        )}
        {stepcount == 2 ? (
          <>
            <Card title="Welcome" secondary={true}>
              Please choose your prefered language below
            </Card>
            <LanguageSelect></LanguageSelect>
          </>
        ) : (
          false
        )}
      </section>
      <Button
        onClick={() => {
          setStepcount(stepcount + 1);
        }}
        theme="outline"
      >
        next <Icon type="chevron-right"></Icon>
      </Button>

      {/* {stepcount > -1 ? <Stepcounter step={stepcount} /> : false} */}
    </>
  );
}
