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
        label: "C-2.5: Develops discrimination in the sense of touch",
        value: "C-2.5: Develops discrimination in the sense of touch",
      },
      {
        label:
          "C-2.6: Begins integrating sensorial perceptions to get a holistic awareness of experiences",
        value:
          "C-2.6: Begins integrating sensorial perceptions to get a holistic awareness of experiences",
      },
      {
        label: "C-2.4: Differentiates multiple smells and tastes",
        value: "C-2.4: Differentiates multiple smells and tastes",
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
        label: "C-2.2: Develops visual memory for symbols and representations",
        value: "C-2.2: Develops visual memory for symbols and representations",
      },
      {
        label: "C-1.2: Practices basic self-care and hygiene",
        value: "C-1.2: Practices basic self-care and hygiene",
      },
      {
        label: "C-1.4: Practices safe use of material and simple tools",
        value: "C-1.4: Practices safe use of material and simple tools",
      },
      {
        label: "C-1.6: Understands unsafe situations and asks for help",
        value: "C-1.6: Understands unsafe situations and asks for help",
      },
      {
        label:
          "C-1.5: Shows awareness of safety in movements (walking, running, cycling) and acts appropriately",
        value:
          "C-1.5: Shows awareness of safety in movements (walking, running, cycling) and acts appropriately",
      },
      {
        label: "C-1.3: Keeps school/classroom hygienic and organised",
        value: "C-1.3: Keeps school/classroom hygienic and organised",
      },
      {
        label:
          "C-1.1: Shows a liking for and understanding of nutritious food and does not waste food",
        value:
          "C-1.1: Shows a liking for and understanding of nutritious food and does not waste food",
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
          "C-3.4: Shows strength and endurance in carrying, walking, and running",
        value:
          "C-3.4: Shows strength and endurance in carrying, walking, and running",
      },
      {
        label:
          "C-3.1: Shows coordination between sensorial perceptions and body movements in various activities",
        value:
          "C-3.1: Shows coordination between sensorial perceptions and body movements in various activities",
      },
      {
        label:
          "C-5.1: Demonstrates willingness and participation in age-appropriate physical work towards helping others",
        value:
          "C-5.1: Demonstrates willingness and participation in age-appropriate physical work towards helping others",
      },
      {
        label: "C-6.1: Shows care for and joy in engaging with all life forms",
        value: "C-6.1: Shows care for and joy in engaging with all life forms",
      },
      {
        label: "C-4.3: Interacts comfortably with other children and adults",
        value: "C-4.3: Interacts comfortably with other children and adults",
      },
      {
        label:
          "C-4.6: Shows kindness and helpfulness to others (including animals, plants) when they are in need",
        value:
          "C-4.6: Shows kindness and helpfulness to others (including animals, plants) when they are in need",
      },
      {
        label:
          "C-4.5: Understands and responds positively to social norms in the classroom and school",
        value:
          "C-4.5: Understands and responds positively to social norms in the classroom and school",
      },
      {
        label: "C-4.4: Shows cooperative behaviour with other children",
        value: "C-4.4: Shows cooperative behaviour with other children",
      },
      {
        label:
          "C-4.2: Recognises different emotions and makes deliberate effort to regulate them appropriately",
        value:
          "C-4.2: Recognises different emotions and makes deliberate effort to regulate them appropriately",
      },
      {
        label:
          "C-4.7: Understands and responds positively to different thoughts, preferences, and emotional needs of other children",
        value:
          "C-4.7: Understands and responds positively to different thoughts, preferences, and emotional needs of other children",
      },
      {
        label:
          "C-4.1: Starts recognising ‘self’ as an individual belonging to a family and community",
        value:
          "C-4.1: Starts recognising ‘self’ as an individual belonging to a family and community",
      },
      {
        label:
          "C-8.12: Develops adequate and appropriate vocabulary for comprehending and expressing concepts and procedures related to quantities, shapes, space, and measurements",
        value:
          "C-8.12: Develops adequate and appropriate vocabulary for comprehending and expressing concepts and procedures related to quantities, shapes, space, and measurements",
      },
      {
        label: "C-8.11: Performs simple transactions using money up to INR 100",
        value: "C-8.11: Performs simple transactions using money up to INR 100",
      },
      {
        label:
          "C-8.1: Sorts objects into groups and sub-groups based on more than one property",
        value:
          "C-8.1: Sorts objects into groups and sub-groups based on more than one property",
      },
      {
        label:
          "C-8.5: Recognises and uses numerals to represent quantities up to 99 with the understanding of decimal place value system",
        value:
          "C-8.5: Recognises and uses numerals to represent quantities up to 99 with the understanding of decimal place value system",
      },
      {
        label:
          "C-8.3: Counts up to 99 both forwards and backwards and in groups of 10s and 20s Counts up to 99 both forwards and backwards and in groups of 10s and 20s",
        value:
          "C-8.3: Counts up to 99 both forwards and backwards and in groups of 10s and 20s Counts up to 99 both forwards and backwards and in groups of 10s and 20s",
      },
      {
        label:
          "C-8.9: Selects appropriate tools and units to perform simple measurements of length, weight, and volume of objects in their immediate environment",
        value:
          "C-8.9: Selects appropriate tools and units to perform simple measurements of length, weight, and volume of objects in their immediate environment",
      },
      {
        label:
          "C-8.7: Recognises multiplication as repeated addition and division as equal sharing",
        value:
          "C-8.7: Recognises multiplication as repeated addition and division as equal sharing",
      },
      {
        label:
          "C-8.2: Identifies and extends simple patterns in their surroundings, shapes, and numbers",
        value:
          "C-8.2: Identifies and extends simple patterns in their surroundings, shapes, and numbers",
      },
      {
        label:
          "C-8.6: Performs addition and subtraction of 2-digit numbers fluently using flexible strategies of composition and decomposition",
        value:
          "C-8.6: Performs addition and subtraction of 2-digit numbers fluently using flexible strategies of composition and decomposition",
      },
      {
        label:
          "C-8.4: Arranges numbers up to 99 in ascending and descending order",
        value:
          "C-8.4: Arranges numbers up to 99 in ascending and descending order",
      },
      {
        label:
          "C-8.10: Performs simple measurements of time in minutes, hours, day, weeks, and months",
        value:
          "C-8.10: Performs simple measurements of time in minutes, hours, day, weeks, and months",
      },
      {
        label:
          "C-8.8: Recognises, makes, and classifies basic geometric shapes and their observable properties, and understands and explains the relative relation of objects in space",
        value:
          "C-8.8: Recognises, makes, and classifies basic geometric shapes and their observable properties, and understands and explains the relative relation of objects in space",
      },
      {
        label:
          "C-7.2: Observes and understands cause and effect relationships in nature by forming simple hypothesis and uses observations to explain their hypothesis",
        value:
          "C-7.2: Observes and understands cause and effect relationships in nature by forming simple hypothesis and uses observations to explain their hypothesis",
      },
      {
        label:
          "C-7.3: Uses appropriate tools and technology in daily life situations and for learning",
        value:
          "C-7.3: Uses appropriate tools and technology in daily life situations and for learning",
      },
      {
        label:
          "C-7.1: Observes and understands different categories of objects and relationships between them",
        value:
          "C-7.1: Observes and understands different categories of objects and relationships between them",
      },
      {
        label:
          "C-10.6: Reads short poems and begins to appreciate the poem for its choice of words and imagination (L1)",
        value:
          "C-10.6: Reads short poems and begins to appreciate the poem for its choice of words and imagination (L1)",
      },
      {
        label:
          "C-10.3: Recognises all the letters of the alphabet (forms of akshara) of the script (L1) and uses this knowledge to read and write word",
        value:
          "C-10.3: Recognises all the letters of the alphabet (forms of akshara) of the script (L1) and uses this knowledge to read and write word",
      },
      {
        label:
          "C-10.1: Develops phonological awareness and blends phonemes/syllables into words and segment words into phonemes/syllables in L1",
        value:
          "C-10.1: Develops phonological awareness and blends phonemes/syllables into words and segment words into phonemes/syllables in L1",
      },
      {
        label:
          "C-10.8: Writes a paragraph to express their understanding and experiences (L1)",
        value:
          "C-10.8: Writes a paragraph to express their understanding and experiences (L1)",
      },
      {
        label:
          "C-10.7: Reads and comprehends meaning of short news items, instructions and recipes, and publicity material (L1)",
        value:
          "C-10.7: Reads and comprehends meaning of short news items, instructions and recipes, and publicity material (L1)",
      },
      {
        label:
          "C-10.9: Shows interest in picking up and reading a variety of children’s books (L1)",
        value:
          "C-10.9: Shows interest in picking up and reading a variety of children’s books (L1)",
      },
      {
        label:
          "C-10.5: Reads short stories and comprehends its meaning – by identifying characters, storyline and what the author wanted to say – on their own (L1)",
        value:
          "C-10.5: Reads short stories and comprehends its meaning – by identifying characters, storyline and what the author wanted to say – on their own (L1)",
      },
      {
        label:
          "C-10.4: Reads stories and passages (in L1) with accuracy and fluency with appropriate pauses and voice modulation",
        value:
          "C-10.4: Reads stories and passages (in L1) with accuracy and fluency with appropriate pauses and voice modulation",
      },
      {
        label:
          "C-10.2: Understands basic structure/format of a book, idea of words in print and direction in which they are printed, and recognises basic punctuation marks",
        value:
          "C-10.2: Understands basic structure/format of a book, idea of words in print and direction in which they are printed, and recognises basic punctuation marks",
      },
      {
        label:
          "C-9.4: Understands oral instructions for a complex task and gives clear oral instructions for the same to others",
        value:
          "C-9.4: Understands oral instructions for a complex task and gives clear oral instructions for the same to others",
      },
      {
        label:
          "C-9.7: Knows and uses enough words to carry out day-to-day interactions effectively and can guess meaning of new words by using existing vocabulary",
        value:
          "C-9.7: Knows and uses enough words to carry out day-to-day interactions effectively and can guess meaning of new words by using existing vocabulary",
      },
      {
        label:
          "C-9.5: Comprehends narrated/read-out stories and identifies characters, storyline and what the author wants to say",
        value:
          "C-9.5: Comprehends narrated/read-out stories and identifies characters, storyline and what the author wants to say",
      },
      {
        label:
          "C-9.3: Converses fluently and can hold a meaningful conversation",
        value:
          "C-9.3: Converses fluently and can hold a meaningful conversation",
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
        label: "C-9.6: Narrates short stories with clear plot and characters",
        value: "C-9.6: Narrates short stories with clear plot and characters",
      },
      {
        label:
          "C-11.2: Recognises all the letters of the alphabet of the script (L2) and uses this knowledge to read and write simple words and sentences",
        value:
          "C-11.2: Recognises all the letters of the alphabet of the script (L2) and uses this knowledge to read and write simple words and sentences",
      },
      {
        label:
          "C-11.1: Develops phonological awareness and blends phonemes/syllables into words and segmentwords into phonemes/syllables in L2",
        value:
          "C-11.1: Develops phonological awareness and blends phonemes/syllables into words and segmentwords into phonemes/syllables in L2",
      },
      {
        label:
          "C-12.5: Communicates and appreciates a variety of responses while creating and experiencing different forms of art, local culture, and heritage",
        value:
          "C-12.5: Communicates and appreciates a variety of responses while creating and experiencing different forms of art, local culture, and heritage",
      },
      {
        label: "C-12.4: Works collaboratively in the arts",
        value: "C-12.4: Works collaboratively in the arts",
      },
      {
        label:
          "C-12.2: Explores and plays with own voice, body, spaces, and a variety of objects to create music, role-play, dance, and movement",
        value:
          "C-12.2: Explores and plays with own voice, body, spaces, and a variety of objects to create music, role-play, dance, and movement",
      },
      {
        label:
          "C-12.3: Innovates and works imaginatively to express ideas and emotions through the arts",
        value:
          "C-12.3: Innovates and works imaginatively to express ideas and emotions through the arts",
      },
      {
        label:
          "C-12.1: Explores and plays with a variety of materials and tools to create two-dimensional and three-dimensional artworks in varying sizes",
        value:
          "C-12.1: Explores and plays with a variety of materials and tools to create two-dimensional and three-dimensional artworks in varying sizes",
      },
      {
        label:
          "C-13.1: Attention and intentional action: Acquires skills to plan, focus attention, and direct activities to achieve specific goals",
        value:
          "C-13.1: Attention and intentional action: Acquires skills to plan, focus attention, and direct activities to achieve specific goals",
      },
      {
        label:
          "C-13.3: Observation, wonder, curiosity, and exploration: Observes minute details of objects, wonders and explores using various senses, tinkers with objects, asks questions",
        value:
          "C-13.3: Observation, wonder, curiosity, and exploration: Observes minute details of objects, wonders and explores using various senses, tinkers with objects, asks questions",
      },
      {
        label:
          "C-13.2: Memory and mental flexibility: Develops adequate working memory, mental flexibility (to sustain or shift attention appropriately), and self-control (to resist impulsive actions or responses) that would assist them in learning in structured environments",
        value:
          "C-13.2: Memory and mental flexibility: Develops adequate working memory, mental flexibility (to sustain or shift attention appropriately), and self-control (to resist impulsive actions or responses) that would assist them in learning in structured environments",
      },
      {
        label:
          "C-13.4: Classroom norms: Adopts and follows norms with agency and understanding",
        value:
          "C-13.4: Classroom norms: Adopts and follows norms with agency and understanding",
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
