import { useEffect, useState } from "react";
import { Card, Checkbox } from "webcoreui/react";
import { getSetting, setSetting } from "../utils/localDB";
import { setCheckboxSetting } from "../utils/localDB";
type CheckboxCardProps = {
  label: string;
  type: "accommodations" | "situation";
  value: string;
};

export default function CheckboxCard(props: CheckboxCardProps) {
  const [checked, setCheckbox] = useState(false);
  useEffect(() => {}, []);
  return (
    <Card>
      <Checkbox
        label={props.label}
        value={props.value}
        onChange={(e) => {
          void setCheckboxSetting(
            props.type,
            props.value,
            e.currentTarget.checked,
          ).catch(console.error);
        }}
        onClick={(e) => {
          setCheckbox(e.currentTarget.checked);
        }}
      />
    </Card>
  );
}
