import { useMemo, FC, useEffect, useState } from "react";
import { map } from "lodash";
import NationalCodinator from "./Filters/NationalCodinator";
import CourseLanguage from "./Filters/CourseLanguage";
import CourseCompetencies from "./Filters/CourseCompetencies";
import CourseGoal from "./Filters/CourseGoal";
import CourseTheme from "./Filters/CourseTheme";
import CourseDomain from "./Filters/CourseDomain";
import CourseType from "./Filters/CourseType";
import getDropdownValues from "../api/getApi";

const CourseFilters: FC<{ applyFilter: any }> = ({ applyFilter }) => {
  const [domain, setDomain] = useState([]);
  const [curricular, setCurricular] = useState([]);
  const [competency, setCompetency] = useState([]);

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    const result = await getDropdownValues();
    setDomain(result?.data?.result?.framework?.categories[0]?.terms);
    setCurricular(result?.data?.result?.framework?.categories[1]?.terms);
    setCompetency(result?.data?.result?.framework?.categories[2]?.terms);
  };

  const courseFilters = useMemo(
    () => [
      // {
      //   key: "NationalCoordinator",
      //   label: "National Coordinator",
      //   value: "",
      //   component: (
      //     <NationalCodinator
      //       applyFilter={applyFilter}
      //       label="National Coordinator"
      //     />
      //   ),
      // },
      // {
      //   key: "CourseMode",
      //   label: "Course Mode",
      //   value: "",
      //   component: <CourseMode applyFilter={applyFilter} label="Course Mode" />,
      // },
      // {
      //   key: "CourseDuration",
      //   label: "Course Duration",
      //   value: "",
      //   component: (
      //     <CourseDuration applyFilter={applyFilter} label="Course Duration" />
      //   ),
      // },
      // {
      //   key: "Course Credits",
      //   label: "Course Credits",
      //   value: "",
      //   items: [],
      //   component: (
      //     <CourseCredits applyFilter={applyFilter} label="Course Credits" />
      //   ),
      // },
      // {
      //   key: "Status",
      //   label: "Course Status",
      //   value: "",
      //   items: [],
      //   component: <CourseStatus applyFilter={applyFilter} />,
      // },
      // {
      //   key: "Category",
      //   label: "Course Category",
      //   value: "",
      //   items: [],
      //   component: (
      //     <CourseCategory applyFilter={applyFilter} label="Course Category" />
      //   ),
      // },
      {
        key: "Domain",
        label: "Course Domain",
        value: "",
        items: [],
        component:
          curricular.length > 0 ? (
            <CourseDomain
              applyFilter={applyFilter}
              label="Domain"
              domain={domain}
            />
          ) : null,
      },
      {
        key: " Goal",
        label: "Course Goal",
        value: "",
        items: [],
        component:
          curricular.length > 0 ? (
            <CourseGoal
              applyFilter={applyFilter}
              label="Curricular Goal"
              curricular={curricular}
            />
          ) : null,
      },
      {
        key: "Competencies",
        label: "Course Competencies",
        value: "",
        items: [],
        component:
          competency.length > 0 ? (
            <CourseCompetencies
              applyFilter={applyFilter}
              label="Competencies"
              competency={competency}
            />
          ) : null,
      },
      {
        key: "Language",
        label: "Course Language",
        value: "",
        items: [],
        component: (
          <CourseLanguage applyFilter={applyFilter} label="Language" />
        ),
      },
      {
        key: "Theme",
        label: "Course Theme",
        value: "",
        items: [],
        component: <CourseTheme applyFilter={applyFilter} label="Theme" />,
      },
      {
        key: "Type",
        label: "Course Type",
        value: "",
        items: [],
        component: <CourseType applyFilter={applyFilter} label="Type" />,
      },
    ],
    [curricular, domain, competency]
  );

  return (
    <>
      {map(courseFilters, (cFilter: any) => (
        <div
          className="bg-white"
          style={{ background: "linear-gradient(to left, #ffff, #EDF0FD)" }}
        >
          {/* <div className="w-full text-[#000]" style={{ display: "block" }}>
            {cFilter.label}
          </div> */}
          {cFilter.component && (
            <div className="p-2 text-center">{cFilter.component}</div>
          )}
        </div>
      ))}
    </>
  );
};

export default CourseFilters;
