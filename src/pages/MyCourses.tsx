import React, { FC, useCallback, useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Filters from "../components/Filters";
import Header from "../components/NewHeader";
import Shimmer from "../components/CourseShimmer";
import { map } from "lodash";
import CourseCard from "../components/CourseCard";
import axios from "axios";
import { CourseType } from "../types/courses";
const MyCourses: FC<{ mode: string; socket: any }> = ({ mode, socket }) => {
  const [courses, setCourses] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);
  const applyFilters = useCallback(() => {}, []);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 3000);
    // axios.get('').then(res=>{})
  }, []);
  return (
    <div>
      <Header />
      <Container>
        <Row className="mt-5">
          <Col>
            <FaArrowAltCircleRight style={{ fontSize: "25px" }} /> &nbsp;{" "}
            <span
              style={{
                fontWeight: "700",
                fontSize: "20px",
                lineHeight: "50px",
              }}
            >
              My Courses
            </span>
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <Filters applyFilter={applyFilters} mode={mode} />
          </Col>
          <Col xs={9}>
            {isLoading ? (
              <Shimmer />
            ) : (
              //@ts-ignore
              map(courses, (course: CourseType, index) => (
                <CourseCard course={course} key={index} isMyCourse />
              ))
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MyCourses;
