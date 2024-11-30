// import React from "react";
import "../App.css";
import Footer from "../components/footer";
import Newnav from "../components/newnav";
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

  const testimonials = [
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "images/person_1.jpg",
      name: "John Gustavo",
      position: "Customer",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "images/person_2.jpg",
      name: "Jane Doe",
      position: "Customer",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "images/person_3.jpg",
      name: "Sam Smith",
      position: "Customer",
    },
    {
      text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
      image: "images/person_4.jpg",
      name: "Sam Smith",
      position: "Customer",
    },
  ];
  return (
    <>
      <div className="main">
        <div>
          <Newnav />
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

        <section className="about-section">
          <div className="container">
            <div
              className="row no-gutters"
              style={{
                backgroundImage: `url(images/about.jpg)`,
                backgroundSize: "contain", // Makes the image fit within the div without cropping
                backgroundRepeat: "no-repeat", // Prevents the image from repeating
                backgroundPosition: "right", // Centers the image within the div
              }}
            >
              {/* About Section */}

              <div className="w-100">
                <div className="col-lg-8  text-content p-4">
                  <h2 className="subheadingA">About Us</h2>
                  <h2 className="mb-3">Welcome to Cafe Neon</h2>
                  <p className="about-content">
                    On her way, she met a copy. The copy warned the Little Blind
                    Text that where it came from, it would have been rewritten a
                    thousand times, leaving behind only "and." The Little Blind
                    Text should turn around and return to its own, safe country.
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, where roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section
          class="ftco-section ftco-intro"
          style="background-image: url(images/bg_3.jpg);"
        >
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 text-center">
                <span>Now Booking</span>
                <h2>Private Dinners &amp; Happy Hours</h2>
              </div>
            </div>
          </div>
        </section> */}
        <section
          className="bg-cover bg-center relative py-16"
          style={{ backgroundImage: "url('images/bg_5.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="container mx-auto relative z-10">
            <div className="text-center mb-10">
              <span className="text-yellow-400 font-bold text-sm uppercase">
                Testimony
              </span>
              <h2 className="text-white text-4xl font-bold mt-2">
                Happy Customer
              </h2>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-4xl">
                <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory">
                  {testimonials.map((item, index) => (
                    <div
                      key={index}
                      className="flex-none w-80  p-6 text-center rounded-lg shadow-lg snap-start"
                    >
                      <div
                        className="w-24 h-24 mx-auto mb-4 bg-cover bg-center rounded-full relative"
                        style={{ backgroundImage: `url(${item.image})` }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center rounded-full">
                          <i className="text-white text-2xl fas fa-quote-left"></i>
                        </div>
                      </div>
                      <p className="text-yellow-600 italic mb-4">{item.text}</p>
                      <p className="text-white font-bold">{item.name}</p>
                      <span className="text-yellow-500 text-sm">
                        {item.position}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default Home;
