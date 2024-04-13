
import {Navbar, Nav, Container} from "react-bootstrap";

const NavComp = () => {
   


    return <div className="sticky-top">
       <Navbar bg="dark" data-bs-theme="dark" expand="lg"  >
      <Container>
        <Navbar.Brand href="#home" className="fw-bold fs-4">Belajar React</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-center"  >
            <Nav.Link href="#Home" className="mx-2 ">Home</Nav.Link>
            <Nav.Link href="#link"className="mx-2 ">Galery</Nav.Link>
            <Nav.Link href="#link"className="mx-2 ">Service</Nav.Link> 
            <Nav.Link href="#link"className="mx-2 ">FAQ</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>;
};

export default NavComp;