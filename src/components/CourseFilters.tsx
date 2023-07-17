import { useMemo, FC } from "react";
import { map } from "lodash";
import NationalCodinator from "./Filters/NationalCodinator";
import CourseLanguage from "./Filters/CourseLanguage";
import CourseCompetencies from "./Filters/CourseCompetencies";
import CourseGoal from "./Filters/CourseGoal";
import CourseTheme from "./Filters/CourseTheme";
import CourseDomain from "./Filters/CourseDomain";
import CourseType from "./Filters/CourseType";

const CourseFilters: FC<{ applyFilter: any }> = ({ applyFilter }) => {
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
        component: <CourseDomain applyFilter={applyFilter} label="Domain" />,
      },
      {
        key: "Goal",
        label: "Course Goal",
        value: "",
        items: [],
        component: <CourseGoal applyFilter={applyFilter} label="Goal" />,
      },
      {
        key: "Competencies",
        label: "Course Competencies",
        value: "",
        items: [],
        component: (
          <CourseCompetencies applyFilter={applyFilter} label="Competencies" />
        ),
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
    []
  );

  return (
    <>
      {map(courseFilters, (cFilter: any) => (
        <div className="bg-white">
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
