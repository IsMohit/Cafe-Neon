// import React from "react";
// import { Link } from "react-router-dom";

// function Nav() {
//   return (
//     <div className="navbar-container">
//       <div className="navbar-left">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="/">
//               Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/menu">
//               Menu
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-center">
//         <img
//           src="/images/logo.png"
//           alt="Cafe Neon Logo"
//           className="navbar-logo"
//         />
//       </div>
//       <div className="navbar-right">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="/about">
//               About
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/blog">
//               Blog
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Nav;

import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function CafeNavbar() {
  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      className="py-3"
      style={{ position: "fixed" }}
    >
      <Container>
        {/* Left Section */}
        <Navbar.Brand href="/">
          <img
            src="/images/logo.png"
            alt="Cafe Neon Logo"
            className="navbar-logo"
          />
          Cafe Neon
        </Navbar.Brand>

        {/* Toggle for Mobile View */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Center and Right Section */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="px-3">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/menu" className="px-3">
              Menu
            </Nav.Link>
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

export default CafeNavbar;
