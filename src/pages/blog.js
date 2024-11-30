import React from "react";
import { Link } from "react-router-dom";
import "../style/blog.css";
import Newnav from "../components/newnav";
import Footer from "../components/footer";

import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";

const blogData = [
  {
    img: img1,
    title: "The Art of Fine Dining",
    date: "21st May, 2021",
    description:
      "Explore the elegance and finesse offine dining, where every detail counts and every flavor tells a story.",
  },
  {
    img: img2,
    title: "Why Farm-to-Table Matters",
    date: "15th June, 2021",
    description:
      "Discover how farm-to-table dining is revolutionizing the food industry with fresh, sustainable ingredients.",
  },
  {
    img: img3,
    title: "The Vegan and Vegetarian Revolution",
    date: "10th July, 2021",
    description:
      "Learn about the health benefits and ethical aspects of vegan and vegetarian diets, plus some must-try recipes.",
  },
];

const Blog = () => {
  return (
    <div>
      <div>
        {" "}
        <Newnav />{" "}
      </div>
      <section className="blogs py-5" id="blogs">
        <div className="containerb">
          <h1 className="text-center mb-5">
            <span className="heading">Our Blogs</span>
          </h1>
          <div className="row">
            {blogData.map((item, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="card shadow-sm h-100">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">
                      <small className="text-muted">
                        by admin / {item.date}
                      </small>
                    </p>
                    <p className="card-text">{item.description}</p>
                    <Link to={`/blog/${index}`} className="btn btn-primary">
                      Read more
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Blog;
