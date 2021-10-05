import React from "react";
import Teachers from "../Teachers/Teachers";
import Banner from "./../Banner/Banner";
import Courses from "../Courses/Courses";
import About from "../About/About";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Courses home={true}></Courses>
      <Teachers home={true}></Teachers>
      <About></About>
    </div>
  );
};

export default Home;
