import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
interface Option {
  label: string;
  value: string;
}
const CourseGoal: FC<{ applyFilter: any; label: string; curricular: any }> = ({
  applyFilter,
  label,
  curricular,
}) => {
  const [mode, setMode] = useState({ label: "All", value: "" });
  const options = useMemo<Option[]>(() => {
    const allOption: Option = { label: "All", value: "" };
    const mappedOptions =
      curricular?.map((option: any) => ({
        label: option?.name || "",
        value: option?.name || "",
      })) || [];
    return [allOption, ...mappedOptions];
  }, [curricular]);

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
