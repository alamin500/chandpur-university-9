import React, { useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Footer from "../Footer/Footer";
import MenuBar from "../MenuBar/MenuBar";
import "./Teachers.css";


const Teachers = () => {
  // const [teams, setTeams] = useState("");
  const [teachers, setTeachers] = useState([]);
  // const handleChange = (e) => {
  //   const searchText = e.target.value;
  //   setTeams(searchText);
  //   console.log(e.target.value);
  // };

  useEffect(() => {
    fetch("/teachersData.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  
  return (
    <div className="">
      
    <div className="container container-fluid">
    <h1>Our Experienced Teachers</h1>
      <div className="teacher">
      
          {
              teachers.map((teacher)=>(
               
              
                <div className="a-box ">
  <div className="img-container">
    <div className="img-inner">
      <div className="inner-skew">
        <img className="" src={teacher.img}/>
      </div>
    </div>
     </div>
  <div className="text-container">
  <h3>{teacher.name}</h3>
  <h5>Adress: <strong>{teacher.adress}</strong></h5>
  <h6>Salary: <strong>${teacher.salary}</strong></h6>
  <p>E-mail: <strong>{teacher.email}</strong></p>
    <div>
      
  </div>
</div>
        </div>
           
      )
              )}
      </div>
      
    </div>
    
  </div>
  );
};

export default Teachers;
