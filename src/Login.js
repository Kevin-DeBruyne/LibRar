import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Navbar, Row, Col } from "react-bootstrap";
import background from "./pexels-polina-zimmerman-3747468.jpg";

const Nav = () => {
  const navStyle = {
    backgroundColor: "rgb(0,0,0,0.5)",
    // paddingLeft: "5%",
    // width: "auto",
    left: "0"
  };

  return (
    <Container>
      {/* <Row> */}
        {/* <Col> */}
          <Navbar fluid variant="dark" expand="lg" style={navStyle} >
            <Navbar.Brand href="#home">
              <h1 style={{ color: "#82cff1" }}>LibRar</h1>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar>
        {/* </Col> */}
      {/* </Row>   */}
    </Container>
  );
};
export default Nav;
