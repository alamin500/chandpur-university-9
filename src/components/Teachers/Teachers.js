import React, { useEffect, useState } from "react";
import "./Teachers.css";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    fetch("/teachersData.json")
      .then((res) => res.json())
      .then((data) => setTeachers(data));
  }, []);

  return (
    <div className="">
    <div className="container container-fluid">
    <h1 className="experience">Our Experienced Teachers</h1>
      <div className="teacher">
          {
              teachers.map((teacher, i)=>(
                <div key={i}>
                <div className="a-box ">
                <div className="img-container">
                <div className="img-inner">
                <div className="inner-skew">
               <img className="" src={teacher.img}/>
           </div>
         </div>
     </div>
     <div className="text-container">
          <h3 className="h3-name">{teacher.name}</h3>
           <h5>Adress: <strong>{teacher.adress}</strong></h5>
           <h6>Salary: <strong>${teacher.salary}</strong></h6>
           <p>E-mail: <strong>{teacher.email}</strong></p>
        <div>
      </div>
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
