import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CourseTheme: FC<{ applyFilter: any; label: string }> = ({
  applyFilter,
  label,
}) => {
  const [mode, setMode] = useState({ label: "All", value: "" });
  const options = useMemo(
    () => [
      { label: "All", value: "" },
      { label: "Animals", value: "Animals" },
      { label: "Food", value: "Food" },
      { label: "Colors", value: "Colors" },
      { label: "Vegetables", value: "Vegetables" },
      { label: "Home Activities", value: "Home Activities" },
      { label: "Birds", value: "Birds" },
      { label: "Relations", value: "Relations" },
      { label: "Numbers", value: "Numbers" },
    ],
    []
  );

  const onChange = useCallback(
    (option: any): void => {
      setMode(option.target.value);
      applyFilter((prev: any) => ({
        ...prev,
        theme: option?.target.value,
      }));
    },
    [applyFilter]
  );

  return (
    // <Dropdown options={options} onChange={onChange} value={mode} className='w-full' />
    <FloatingLabel controlId="floatingSelect" label={label}>
      <Form.Select aria-label={label} onChange={onChange}>
        {map(options, (option) => (
          <option value={option?.value}>{option?.label}</option>
        ))}
      </Form.Select>
    </FloatingLabel>
  );
};

export default CourseTheme;
