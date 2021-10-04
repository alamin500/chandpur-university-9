import React from "react";
import Teachers from "../Teachers/Teachers";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import Banner from "./../Banner/Banner";
import Courses from "../Courses/Courses";
import About from "../About/About";


const Home = () => {
  return (
    <div>
     
      <Banner></Banner>
      <Courses></Courses>
      <Teachers></Teachers>
    
      <About></About>
      
    </div>
  );
};

export default Home;
