import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CourseGoal: FC<{ applyFilter: any; label: string }> = ({
  applyFilter,
  label,
}) => {
  const [mode, setMode] = useState({ label: "All", value: "" });
  const options = useMemo(
    () => [
      { label: "All", value: "" },
      {
        label: "CG-2: Children develop sharpness in sensorial perceptions",
        value: "CG-2: Children develop sharpness in sensorial perceptions",
      },
      {
        label: "CG-1: Children develop habits that keep them healthy and safe",
        value: "CG-1: Children develop habits that keep them healthy and safe",
      },
      {
        label: "CG-3: Children develop a fit and flexible body",
        value: "CG-3: Children develop a fit and flexible body",
      },
      {
        label: "CG-4: Children develop emotional intelligence",
        value: "CG-4: Children develop emotional intelligence",
      },
      {
        label:
          "CG-7: Children make sense of world around through observation and logical thinking",
        value:
          "CG-7: Children make sense of world around through observation and logical thinking",
      },
      {
        label:
          "CG-9: Children develop effective communication skills for day-to-day interactions in two languages",
        value:
          "CG-9: Children develop effective communication skills for day-to-day interactions in two languages",
      },
      {
        label:
          "CG-12: Children develop abilities and sensibilities in visual and performing arts, and express their emotions through art in meaningful and joyful ways",
        value:
          "CG-12: Children develop abilities and sensibilities in visual and performing arts, and express their emotions through art in meaningful and joyful ways",
      },
    ],
    []
  );

  const onChange = useCallback(
    (option: any): void => {
      setMode(option.target.value);
      applyFilter((prev: any) => ({
        ...prev,
        goal: option?.target.value,
      }));
    },
    [applyFilter]
  );

  return (
    // <Dropdown options={options} onChange={onChange} value={mode} className='w-full' />
    <FloatingLabel controlId="floatingSelect" label={label}>
      <Form.Select aria-label={label} onChange={onChange}>
        {map(options, (option) => (
          //@ts-ignore
          <option value={option?.value}>{option?.label}</option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
};

export default CourseGoal;
