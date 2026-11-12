import { useState } from "react";
import { Card, Checkbox } from "webcoreui/react";

type CheckboxCardProbs = {
  name: string;
  label: string;
};
export default function CheckboxCard(probs: CheckboxCardProbs) {
  const [checked, setCheckbox] = useState(false);

  return (
    <Card>
      <Checkbox
        name={probs.name}
        label={probs.label}
        // You can also use onChange
        onClick={(e) => setCheckbox(e.target.checked)}
      />
    </Card>
  );
}
