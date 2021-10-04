import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./Courses.css"

const Courses = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch("/courses.json")
          .then((res) => res.json())
          .then((data) => setCourses(data));
      }, []);
    return (
        <div>
                
    <div className="">
    <h1>Our Courses</h1>
      <div className="course">
      
          {
              courses.map((course)=>(
                
              <div>
            <div  className="course-body" >
             <div >
              <img src={course.img} className="img-fluid rounded-start" alt="..."/>
             <div>
              <h3>{course.subject}</h3>
              <h6>Price: <strong>${course.price}</strong></h6>
              <p>Description: <strong>{course.description}</strong></p>
              {/* button  */}
              {/* <button 
              onClick={ ()=> props.handleAddEmployee(props.course)}
              > <h5><i className="fas fa-male"></i> Add Employee</h5></button>   */}
            </div>
        </div>
      </div>
      </div>)
              )}
      </div>
      
    </div>
    
        </div>
    );
};

export default Courses;