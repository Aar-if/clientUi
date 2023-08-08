import { FC, useMemo, useState } from "react";
import Books from "../assets/images/books.jpg";
import { LinkContainer } from "react-router-bootstrap";
import { CourseType } from "../types/courses";
import Rating from "./Ratings";
import { Button, Card, Col, Row } from "react-bootstrap";
import { find, map } from "lodash";
import {
  FaBookmark,
  FaCalendar,
  FaLanguage,
  FaDatabase,
  FaAffiliatetheme,
  FaEye,
  FaUser,
} from "react-icons/fa";
import { BiListPlus } from "react-icons/bi";
import moment from "moment";
import WarningModal from "./WarningModal";
const CourseCard: FC<{ course: CourseType; isMyCourse?: boolean }> = ({
  course,
  isMyCourse,
}) => {
  const [open, setOpen] = useState(false);
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
  const [offeringInstitue, credits, instructors] = useMemo(
    () => [
      find(normalisedTags, { name: "offeringInstitue" })?.value,
      find(normalisedTags, { name: "credits" })?.value,
      find(normalisedTags, { name: "instructors" })?.value,
    ],
    [normalisedTags]
  );

  const [courseUrl, enrollementEndDate] = useMemo(
    () => [
      find(normalisedTags, { name: "url" })?.value,
      find(normalisedTags, { name: "enrollmentEndDate" })?.value,
    ],
    [normalisedTags]
  );

  return (
    <div
      // to={`/courses/${course?.id}`}
      style={{ cursor: "pointer", marginBottom: "10px" }}
    >
      <Card
        className="p-2"
        style={{
          background: "linear-gradient(to bottom, #ffff, #EDF0FD)",
        }}
      >
        <Row>
          <Col>
            <Row>
              {/* <Col xs={3}>
                <Card.Img src={imageUrl} />
              </Col> */}
              <Col xs={7} style={{ padding: "20px" }}>
                <Row>
                  <h5 style={{ color: "#0F75BC" }}>
                    {" "}
                    <b>Provider Name : </b>
                    {offeringInstitue}
                  </h5>
                </Row>
                <Row>
                  <strong style={{ color: "#3B4555" }}>
                    {" "}
                    <b> Title : </b>
                    {course?.descriptor?.name}
                  </strong>
                </Row>
                <Row>
                  <Rating value={4} size={1} />
                </Row>
                <hr style={{ width: "100vh" }}></hr>
              </Col>
            </Row>
            <Row>
              <Col xs={10} style={{ paddingLeft: "20px" }}>
                {" "}
                <b>Description : </b>
                {course?.descriptor?.long_desc}
              </Col>
            </Row>
            <Row>
              <Col xs={10} style={{ paddingLeft: "20px" }}>
                {" "}
                <b>Domain : </b>
                {course?.descriptor?.domain}
              </Col>
            </Row>
            <Row>
              <Col xs={10} style={{ paddingLeft: "20px" }}>
                {" "}
                <b>Curricular Goal : </b>
                {course?.descriptor?.goal}
              </Col>
            </Row>
            <Row>
              <Col xs={10} style={{ paddingLeft: "20px" }}>
                {" "}
                <b>Competency : </b> {course?.descriptor?.competency}
              </Col>
            </Row>

            {isMyCourse ? (
              <Row className="mt-2">
                <Col>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    Svayam - NCERT
                  </Button>
                  <Button
                    variant="outline-success"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    0 INR
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      marginRight: "15px",
                    }}
                  >
                    {" "}
                    Start Course
                  </Button>
                </Col>
              </Row>
            ) : (
              <Row className="mt-2">
                <Col
                  style={{
                    paddingLeft: "20px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                >
                  {/* <FaBookmark
                    color="blue"
                    style={{ fontSize: "23px", marginRight: "15px" }}
                  /> */}
                  {/* <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{ marginRight: "15px" }}
                  >
                    {" "}
                    <BiListPlus style={{ fontSize: "23px" }} /> Add to List
                  </Button> */}
                  {/* <Button variant="outline-secondary" size="sm">
                    <FaEye style={{ fontSize: "18px" }} /> Quick View
                  </Button> */}
                  <Button
                    onClick={() => setOpen(true)}
                    className="px-5 py-2"
                    size="sm"
                    style={{
                      borderTopRightRadius: "20px",
                      borderTopLeftRadius: "20px",
                      borderBottomRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                      background: "#1584D1",
                    }}
                  >
                    Open
                  </Button>
                </Col>
                <WarningModal
                  open={open}
                  setOpen={setOpen}
                  url={courseUrl ?? ""}
                />
              </Row>
            )}
          </Col>

          <Col
            xs={3}
            style={{ borderLeft: "1px solid lightgray" }}
            className="p-2 container-fluid"
          >
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              className="py-1"
            >
              <FaLanguage />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                Language : {course?.descriptor?.language}
              </span>
            </div>
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              className="py-2"
            >
              <FaDatabase />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                Content Type : {course?.descriptor?.contentType}
              </span>
            </div>
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              className="py-2"
            >
              <FaAffiliatetheme />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                Theme : {course?.descriptor?.themes}
              </span>
            </div>
            {/* <div>
              <FaUser />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {instructors}
              </span>
            </div> */}
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default CourseCard;
