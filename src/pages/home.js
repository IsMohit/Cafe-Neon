// import React from "react";
import "../App.css";
import Nav from "../components/nav";
import React, { useState } from "react";
function Home() {
  // State to toggle between images
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Function to toggle images
  const toggleImage = () => {
    setIsFirstImage(!isFirstImage);
  };
  return (
    <>
      <Nav />

      <section className="hero-wrap">
        <div
          className={`background-layer ${isFirstImage ? "visible" : "hidden"}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_1.jpg)`,
          }}
        ></div>
        <div
          className={`background-layer ${!isFirstImage ? "visible" : "hidden"}`}
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_2.jpg)`,
          }}
        ></div>
        <div className="overlay"></div>
        <div className="content">
          <h1>{isFirstImage ? "Servicing Since 2016" : "Best Quality Food"}</h1>
          <div className="toggle-icons">
            <span className="icon-left" onClick={toggleImage}>
              &#10094;
            </span>
            <span className="icon-right" onClick={toggleImage}>
              &#10095;
            </span>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
