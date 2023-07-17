import { map } from "lodash";
import { useCallback, useMemo, useState, FC } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

const CourseCompetencies: FC<{ applyFilter: any; label: string }> = ({
  applyFilter,
  label,
}) => {
  const [mode, setMode] = useState({ label: "All", value: "" });
  const options = useMemo(
    () => [
      { label: "All", value: "" },
      {
        label: "C-2.2: Develops visual memory for symbols and representations",
        value: "C-2.2: Develops visual memory for symbols and representationss",
      },
      {
        label:
          "C-2.3: Differentiates sounds by their pitch, volume and sound patterns by their pitch, volume, and tempo",
        value:
          "C-2.3: Differentiates sounds by their pitch, volume and sound patterns by their pitch, volume, and tempo",
      },
      {
        label:
          "C-2.1: Differentiates between shapes, colours, and their shades",
        value:
          "C-2.1: Differentiates between shapes, colours, and their shades",
      },
      {
        label: "C-1.2: Practices basic self-care and hygiene",
        value: "C-1.2: Practices basic self-care and hygiene",
      },
      {
        label:
          "C-1.1: Shows a liking for and understanding of nutritious food and does not waste food",
        value:
          "C-1.1: Shows a liking for and understanding of nutritious food and does not waste food",
      },
      {
        label: "C-1.3: Keeps school/classroom hygienic and organised",
        value: "C-1.3: Keeps school/classroom hygienic and organised",
      },
      {
        label:
          "C-3.3: Shows precision and control in working with their hands and fingers",
        value:
          "C-3.3: Shows precision and control in working with their hands and fingers",
      },
      {
        label:
          "C-3.2: Shows balance, coordination and flexibility in various physical activities",
        value:
          "C-3.2: Shows balance, coordination and flexibility in various physical activities",
      },
      {
        label:
          "C-3.1: Shows coordination between sensorial perceptions and body movements in various activities",
        value:
          "C-3.1: Shows coordination between sensorial perceptions and body movements in various activities",
      },
      {
        label:
          "C-4.2: Recognises different emotions and makes deliberate effort to regulate them appropriately",
        value:
          "C-4.2: Recognises different emotions and makes deliberate effort to regulate them appropriately",
      },
      {
        label:
          "C-4.1: Starts recognising 'self' as an individual belonging to a family and community",
        value:
          "C-4.1: Starts recognising 'self' as an individual belonging to a family and community",
      },
      {
        label:
          "C-7.2: Observes and understands cause and effect relationships in nature by forming simple hypothesis and uses observations to explain their hypothesis",
        value:
          "C-7.2: Observes and understands cause and effect relationships in nature by forming simple hypothesis and uses observations to explain their hypothesis",
      },
      {
        label:
          "C-7.1: Observes and understands different categories of objects and relationships between them",
        value:
          "C-7.1: Observes and understands different categories of objects and relationships between them",
      },
      {
        label: "C-9.2: Creates simple songs and poems on their own",
        value: "C-9.2: Creates simple songs and poems on their own",
      },
      {
        label:
          "C-9.1: Listens to and appreciates simple songs, rhymes, and poems",
        value:
          "C-9.1: Listens to and appreciates simple songs, rhymes, and poems",
      },
      {
        label:
          "C-12.1: Explores and plays with a variety of materials and tools to create two-dimensional and three-dimensional artworks in varying sizes",
        value:
          "C-12.1: Explores and plays with a variety of materials and tools to create two-dimensional and three-dimensional artworks in varying sizes",
      },
    ],
    []
  );

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
