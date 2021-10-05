import React from "react";
import "./Coursecard.css";
const CoursesCard = (props) => {
  const { course } = props;
  return (
    <div className="course-body">
      <div className="card-img">
        <img src={course.img} className="img-fluid rounded-start" alt="..." />
        <div className="card">
          <h3>{course.subject}</h3>
          <h5>
            Price: <strong>${course.price}</strong>
          </h5>
          <p>
            <strong>{course.description}</strong>
          </p>
          <p>
            <button>Enroll Now</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoursesCard;
