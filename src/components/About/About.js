import React from "react";
import "./About.css";
import image from "../../images/college1.jpg";

const About = () => {
  return (
    <div>
      <div className="about-container container ">
        <div className="about-banner">
          <h1 className="about-us">ABOUT US</h1>
        </div>
      </div>
      <div className=" container d-flex align-items-center justify-content-center">
        <div>
          <img src={image} alt="" />
        </div>
        <div className="about-article">
          <div>
            <h3>Proven learning approaches</h3>
            <p>
              Teaching is one of the most challenging and complex jobs on the
              planet. Our digital resources, tools, and learning materials are
              developed by educational experts to incorporate leading
              pedagogical practices. They are useful in any type of teaching
              moment and many can be used to support national education
              standards.
            </p>
          </div>
          <div>
            <h3>Empowered educators</h3>
            <p>
              From school teachers and tutors to home schoolers and parents,
              engaged adults are the key to unlocking each child's potential and
              drive to learn. We empower all kinds of educators to teach kids by
              providing the best educational resources in any form or device to
              be used at home, at school, and everywhere in-between.
            </p>
          </div>
          <div>
            <h3>Unique experiences</h3>
            <p>
              There is no such thing as "one size fits all" in education; each
              educator and child has unique challenges and goals. We celebrate
              the diversity of our users by offering differentiated resources
              that can meet a wide range of educational needs - and raise kids'
              confidence in learning.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
