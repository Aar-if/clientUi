import { FC } from "react";
import imagePath from "../assets/images/tekdi-logo-black.png";
import { Navbar, Nav, Form, Container, Button } from "react-bootstrap";
import { FaGratipay, FaHome } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";

const Header: FC<{
  isSearchVisible?: boolean;
  handleChange?: (ev: any) => void;
}> = ({ isSearchVisible = false, handleChange }) => {
  return (
    <>
      <Navbar style={{ background: "#EDF0FD" }} expand="lg">
        <Container fluid>
          <LinkContainer to={`/`} style={{ cursor: "pointer" }}>
            <Navbar.Brand href="#">
              <img
                src={imagePath}
                style={{ marginRight: "20px", width: "60px", height: "auto" }}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="me-auto">
            {/* <Nav.Link href="/" className="text-black">
              {" "} */}
            {/* <FaHome />  */}
            Explore Education and Skilling Opportunities
            {/* </Nav.Link> */}
            {/* <Nav.Link href="/my_courses" className="text-white"><FaGratipay /> My Courses</Nav.Link> */}
          </Nav>
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Form className="d-flex ">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                style={{ width: "30vw" }}
                onChange={handleChange}
              />
            </Form>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
