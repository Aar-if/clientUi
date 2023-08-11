import React, { FC, useState } from "react";
import { TbSortDescending } from "react-icons/tb";
import CourseFilters from "../CourseFilters";

const Filters: FC<{ applyFilter: any; mode: any }> = ({
  applyFilter,
  mode,
}) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false);

  const handleFilterToggle = () => {
    setIsFilterVisible((prevState) => !prevState);
  };

  return (
    <div
      className="bg-white"
      style={{
        position: "fixed",
      }}
    >
      <div
        onClick={handleFilterToggle}
        // className={`font-medium  rounded-lg cursor-pointer`}
        style={{
          flexDirection: "column",
          width: "15%",
        }}
      >
        <TbSortDescending style={{ fontSize: "22px" }} /> &nbsp; Filter
        {isFilterVisible ? (
          <span
            style={{ marginLeft: "20vh", color: "gray", cursor: "pointer" }}
          >
            Collapse ↑
          </span>
        ) : (
          <span
            style={{ marginLeft: "20vh", color: "gray", cursor: "pointer" }}
          >
            Expand ↓
          </span>
        )}
      </div>

      <div className={isFilterVisible ? "lg:block" : "lg:block hidden"}>
        {/* Show CourseFilters component only when isFilterVisible is true */}
        {isFilterVisible && <CourseFilters applyFilter={applyFilter} />}
      </div>
    </div>
  );
};

export default Filters;
