import React, { useEffect, useState } from 'react';
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
                <h1 className="h1-course">Our Courses</h1>
            <div className="course">
            {
              courses.map((course, i)=>(  
              <div key={i}>
             <div  className="course-body" >
             <div >
              <img src={course.img} className="img-fluid rounded-start" alt="..."/>
             <div>
              <h3>{course.subject}</h3>
              <h6>Price: <strong>${course.price}</strong></h6>
              <p>Description: <strong>{course.description}</strong></p>
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