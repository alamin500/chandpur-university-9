import React from 'react';
import "./Coursecard.css";
const CoursesCard = (props) => {
    const {course}= props;
    return (
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
    );
};

export default CoursesCard;