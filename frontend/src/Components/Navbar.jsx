import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./Navbar.css";

function Header() {
  return (
    <Navbar expand="lg" className="jira-navbar">
      <Container fluid>
        <Navbar.Brand href="/" className="jira-brand">
          Jira Clone
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="jira-nav-link">
              Home
            </Nav.Link>

            <Nav.Link href="/projects" className="jira-nav-link">
              Projects
            </Nav.Link>

            <NavDropdown
              title="Workspaces"
              id="basic-nav-dropdown"
              className="jira-nav-link"
            >
              <NavDropdown.Item href="/workspace">
                My Workspace
              </NavDropdown.Item>

              <NavDropdown.Item href="/teams">Teams</NavDropdown.Item>

              <NavDropdown.Divider />

              <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
