import { FC, useMemo } from "react";
import { CourseType } from "../../types/courses";
import DetailsHeader from "./DetailsHeader";
import Books from "../../assets/images/books.jpg";
import { Card, Col, Container, Row } from "react-bootstrap";
import { find, map } from "lodash";
import Rating from "../Ratings";

const CourseAbout: FC<{ course: CourseType }> = ({ course }) => {
  console.log({ course });
  const imageUrl = useMemo(
    () => course?.descriptor?.images?.[0]?.url ?? Books,
    [course, Books]
  );
  const normalisedTags = useMemo(
    () =>
      map(course?.tags[0]?.list, (tag) => ({
        name: tag?.name,
        value: tag?.value,
      })),
    [course]
  );
  const [offeringInstitue, instructors] = useMemo(
    () => [
      find(normalisedTags, { name: "offeringInstitue" })?.value,
      find(normalisedTags, { name: "instructors" })?.value,
    ],
    [normalisedTags]
  );

  return (
    <Container>
      {/* <DetailsHeader course={course} /> */}
      <Row className="mt-4">
        <Col>
          <Card.Img src={imageUrl} className="rounded" />
        </Col>
      </Row>
      <Container className="mt-3">
        <Row>
          <span style={{ fontSize: "15px", color: "darkgray" }}>
            {offeringInstitue}
          </span>
        </Row>
        <Row>
          <strong>{course?.descriptor?.name}</strong>
        </Row>
        <Row>
          <strong>By: {instructors}</strong>
        </Row>
        <Row>
          <Rating value={4} size={1} />
        </Row>
        <Row className="mt-3">
          <Col>
            <p
              style={{ fontWeight: "500", fontSize: "14px", color: "#606060" }}
            >
              {course?.descriptor?.long_desc}
            </p>
            <p
              className="mt-3"
              style={{ fontWeight: "500", fontSize: "14px", color: "#606060" }}
            ></p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default CourseAbout;
