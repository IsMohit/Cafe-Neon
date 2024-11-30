import React from "react";
import { useParams } from "react-router-dom";
import BlogData from "./blogdata";
import "../style/blogdetail.css";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = BlogData[id];

  return (
    <div className="blog-detail container py-5">
      <h1>{blog.title}</h1>
      <p>
        <small>{blog.date}</small>
      </p>
      <img src={blog.img} alt={blog.title} className="img-fluid" />
      <p>{blog.description}</p>
    </div>
  );
};

export default BlogDetail;
