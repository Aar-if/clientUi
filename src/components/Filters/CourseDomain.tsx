import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CourseDomain: FC<{ applyFilter: any; label: string }> = ({
  applyFilter,
  label,
}) => {
  const [status, setStatus] = useState({ label: "All", value: "" });
  const options = useMemo(
    () => [
      { label: "All", value: "" },
      { label: "Cognitive Development", value: "Cognitive Development" },
      { label: "Physical Development", value: "Physical Development" },
      {
        label: "Socio-Emotional and Ethical Development",
        value: "Socio-Emotional and Ethical Development",
      },
      {
        label: "Language and Literacy Development",
        value: "Language and Literacy Development",
      },
      {
        label: "Aesthetic and Cultural Development",
        value: "Aesthetic and Cultural Development",
      },
      { label: "Positive Learning Habits", value: "Positive Learning Habits" },
      // { label: 'Annual Refresher Programme in Teaching (ARPIT)', value: "ARPIT" },
      // { label: 'Architecture and Planning', value: "ARCHI_COURSES" },
      // { label: 'Design', value: "Design" },
      // { label: 'School', value: "SCHOOL" },
    ],
    []
  );

  const onChange = useCallback(
    (option: any): void => {
      setStatus(option.target.value);
      applyFilter((prev: any) => ({
        ...prev,
        domain: option?.target.value,
      }));
    },
    [applyFilter]
  );

  return (
    // //@ts-ignore
    // <Dropdown options={options} onChange={onChange} value={status} className='w-full' />
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

export default CourseDomain;
