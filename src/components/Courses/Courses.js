import React, { useEffect, useState } from "react";
import CoursesCard from "../CoursesCard/CoursesCard";
import "./Courses.css";

const Courses = (props) => {
  const { home = false } = props;
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
          {courses.map((course, i) =>
            home ? (
              i < 4 && (
                <div key={i}>
                  <CoursesCard course={course} />
                </div>
              )
            ) : (
              <div key={i}>
                <CoursesCard course={course} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;
