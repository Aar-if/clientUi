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
  FaCreditCard,
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
      <Card className="p-2" style={{ backgroundColor: "your-color-here" }}>
        <Row>
          <Col>
            <Row>
              {/* <Col xs={3}>
                <Card.Img src={imageUrl} />
              </Col> */}
              <Col xs={7}>
                <Row>
                  <h6>{offeringInstitue}</h6>
                </Row>
                <Row>
                  <strong>{course?.descriptor?.name}</strong>
                </Row>
                <Row>
                  <Rating value={4} size={1} />
                </Row>
              </Col>
            </Row>
            <Row>
              <Col xs={10}> {course?.descriptor?.long_desc}</Col>
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
                <Col>
                  <FaBookmark
                    color="blue"
                    style={{ fontSize: "23px", marginRight: "15px" }}
                  />
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    style={{ marginRight: "15px" }}
                  >
                    {" "}
                    <BiListPlus style={{ fontSize: "23px" }} /> Add to List
                  </Button>
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
                      background: "#3849ab",
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

          {/* <Col
            xs={3}
            style={{ borderLeft: "1px solid lightgray" }}
            className="p-2 container-fluid"
          >
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              className="py-1"
            >
              <FaCreditCard />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                Credits :{credits}
              </span>
            </div>
            <div
              style={{ borderBottom: "1px solid lightgray" }}
              className="py-2"
            >
              <FaCalendar />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {" "}
                {moment(course?.time?.range?.start).format("Do MMM, YYYY")}
              </span>
            </div>
            <div>
              <FaUser />{" "}
              <span style={{ fontSize: "12px", color: "gray" }}>
                {instructors}
              </span>
            </div>
          </Col> */}
        </Row>
      </Card>
    </div>
  );
};

export default CourseCard;
