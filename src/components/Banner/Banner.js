import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "../MenuBar/MenuBar";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container ">
      <div className="container">
        <div className="row m-0 d-flex banner align-items-center justify-content-center">
          <div className="col-md-12">
            <h1 className="title">
              FIND THE RIGHT PATH <br /> FOR YOU.
            </h1>
            <p className="text-white text-center mt-3">
             Meet university and cultural institutions, who'll share their experience.
            </p>
            <Link to="/courses"><button className="mt-3 about-btn">Our Courses</button></Link>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default Banner;
