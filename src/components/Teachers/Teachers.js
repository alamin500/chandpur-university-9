import React, { useEffect, useState } from "react";
import TeachersCard from "../TeachersCard/TeachersCard";
import "./Teachers.css";

const Teachers = (props) => {
  const { home = false } = props;
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
          {teachers.map((teacher, i) =>
            home ? (
              i < 4 && (
                <div key={i}>
                  <TeachersCard teacher={teacher} />
                </div>
              )
            ) : (
              <div key={i}>
                <TeachersCard teacher={teacher} />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
