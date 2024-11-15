import React from "react";
import "../App.css";
import Nav from "../components/nav";
import Footer from "../components/footer";
function Menu() {
  return (
    <>
      <div className="main">
        <section>
          <Nav />
        </section>
        <section style={{ height: "600px" }}>
          <h2>Welcome To Menu Page </h2>
        </section>
        <section>
          <Footer />{" "}
        </section>
      </div>
    </>
  );
}

export default Menu;
