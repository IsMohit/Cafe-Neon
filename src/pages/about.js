import React from "react";
import "../App.css";

import Newnav from "../components/newnav";
import Footer from "../components/footer";
function About() {
  return (
    <>
      <div className="main">
        <Newnav />
        <div className="ab" style={{ height: "600px" }}>
          Welcome To About Page !
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default About;
