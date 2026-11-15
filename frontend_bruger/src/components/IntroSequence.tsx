import { useEffect, useState } from "react";
import { Button, Card, Icon } from "webcoreui/react";
import LanguageSelect from "./LanguageSelect";
import CheckboxCard from "./CheckboxCard";
import { setSetting, getSetting } from "../utils/localDB";
import { situations } from "../types/situation.type";
import { accommodations } from "../types/accommodation.type";

export default function IntroSequence() {
  const [stepcount, setStepcount] = useState(0);

  useEffect(() => {
    async function initializeSettings() {
      if ((await getSetting("situation")) === undefined) {
        await setSetting(
          "situation",
          Object.fromEntries(situations.map(({ id }) => [id, false])),
        );
      }

      if ((await getSetting("accommodations")) === undefined) {
        await setSetting(
          "accommodations",
          Object.fromEntries(accommodations.map(({ id }) => [id, false])),
        );
      }

      if ((await getSetting("language")) === undefined) {
        await setSetting("language", "en");
      }
    }

    void initializeSettings().catch(console.error);
  }, []);
  return (
    <>
      <section>
        {stepcount == 0 ? (
          <>
            <Card title="Welcome" secondary={true}>
              Please choose your prefered language below
            </Card>
            <LanguageSelect onChange={setSetting}></LanguageSelect>
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
              {situations.map((situation) => {
                return (
                  <CheckboxCard
                    key={situation.id}
                    label={situation.label}
                    value={situation.id}
                    type="situation"
                  ></CheckboxCard>
                );
              })}
            </Card>
          </>
        ) : (
          false
        )}
        {stepcount == 2 ? (
          <>
            <Card title="Welcome" secondary={true}>
              Please tell us about accommodations you're looking for
            </Card>
            <Card>
              {accommodations.map((accommodation) => {
                return (
                  <CheckboxCard
                    key={accommodation.id}
                    label={accommodation.label}
                    value={accommodation.id}
                    type="accommodations"
                  ></CheckboxCard>
                );
              })}
            </Card>
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
