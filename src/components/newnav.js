import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";

// Reference data for dropdown items
const data = [
  { title: "All", link: "/menu" },
  { title: "Breakfast", link: "/breakfast" },
  { title: "Lunch", link: "/lunch" },
  { title: "Dinner", link: "/dinner" },
  { title: "Snacks", link: "/snacks" },
];

function NewNav() {
  return (
    <Navbar
      expand="lg"
      bg="gray"
      variant="dark"
      className="py-3"
      style={{
        position: "fixed",
        top: 20,
        alignItems: "center",
        width: "100%",
        zIndex: 1000,
      }}
    >
      <Container>
        {/* Centered Logo Section */}
        <div className="logo-container">
          <Link to="/">
            <img
              src="/images/logo.png" // Update with the correct path to your logo
              alt="Cafe Neon Logo"
              className="logo"
            />
          </Link>
        </div>
        <span
          style={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            color: "red",
          }}
        >
          Cafe <span style={{ color: "yellow" }}>Neon</span>
        </span>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Collapsible Navbar Links */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto" style={{ color: "white", fontSize: "18px" }}>
            {/* Regular Links */}
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="px-3">
              Menu
            </Nav.Link>
            {/* Dropdown Menu */}
            <NavDropdown
              title=""
              id="navbar-dropdown"
              className="px-3"
              align="end"
            >
              {data.map((item, index) => (
                <NavDropdown.Item as={Link} to={item.link} key={index}>
                  {item.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            <Nav.Link as={Link} to="/about" className="px-3">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" className="px-3">
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NewNav;
