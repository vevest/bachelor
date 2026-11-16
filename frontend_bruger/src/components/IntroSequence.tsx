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
      if (
        (await getSetting("accommodations")) !== undefined &&
        (await getSetting("situation")) !== undefined
      ) {
        window.location.href = "/";
      }
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
            <Card secondary={true}>
              <h3>Welcome</h3>
              <p> Please choose your prefered language below</p>
            </Card>
            <LanguageSelect onChange={setSetting}></LanguageSelect>
          </>
        ) : (
          false
        )}
        {stepcount == 1 ? (
          <>
            <Card secondary={true}>
              <h3>Your situation</h3>
              <p>Please tell us about applies to your current situation</p>
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
            <Card secondary={true}>
              <h3>Accommodations</h3>
              <p>Please tell us about accommodations you're looking for</p>
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
          if (stepcount == 2) {
            window.location.href = "/";
          } else {
            setStepcount(stepcount + 1);
          }
        }}
        theme="outline"
      >
        next <Icon type="chevron-right"></Icon>
      </Button>

      {/* {stepcount > -1 ? <Stepcounter step={stepcount} /> : false} */}
    </>
  );
}
