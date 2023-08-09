import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

interface Option {
  label: string;
  value: string;
}

const CourseCompetencies: FC<{
  applyFilter: any;
  label: string;
  competency: any;
}> = ({ applyFilter, label, competency }) => {
  const [mode, setMode] = useState({ label: "All", value: "" });
  const options = useMemo<Option[]>(() => {
    const allOption: Option = { label: "All", value: "" };
    const mappedOptions =
      competency?.map((option: any) => ({
        label: option?.name || "",
        value: option?.name || "",
      })) || [];
    return [allOption, ...mappedOptions];
  }, [competency]);

  const onChange = useCallback(
    (option: any): void => {
      setMode(option.target.value);
      applyFilter((prev: any) => ({
        ...prev,
        competency: option?.target.value,
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

export default CourseCompetencies;
