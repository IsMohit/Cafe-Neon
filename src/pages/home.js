// import React from "react";
import "../App.css";
import Nav from "../components/nav";
import React, { useState, useEffect, useCallback } from "react";
function Home() {
  // State to toggle between images
  const [isFirstImage, setIsFirstImage] = useState(true);

  // Function to toggle images
  const toggleImage = useCallback(() => {
    setIsFirstImage((prev) => !prev);
  }, []);
  //automatically toggle images at an interval
  useEffect(() => {
    const interval = setInterval(toggleImage, 5000); // Change every 3 seconds
    return () => clearInterval(interval); // Clear interval on component unmount
  }, [toggleImage]);

  return (
    <>
      <div className="main">
        <div>
          <Nav />
        </div>

        <section className="hero-wrap">
          <div
            className={`background-layer ${
              isFirstImage ? "visible" : "hidden"
            }`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_1.jpg)`,
            }}
          ></div>
          <div
            className={`background-layer ${
              !isFirstImage ? "visible" : "hidden"
            }`}
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg_2.jpg)`,
            }}
          ></div>
          <div className="overlay"></div>
          <div className="content">
            <div className="text w-100 mt-5 text-center">
              <span className="subheading"> Cafe Neon</span>
              <h1>
                {isFirstImage ? "Servicing Since 2016" : "Best Quality Food"}
              </h1>
              <span className="subheading-2 sub">cafeteria</span>
            </div>
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
        <div> About us</div>
      </div>
    </>
  );
}

export default Home;
