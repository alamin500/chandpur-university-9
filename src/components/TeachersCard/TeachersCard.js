import React from "react";
import "./TeachersCard.css";

const TeachersCard = (props) => {
  const { teacher } = props;
  return (
    <div className="a-box ">
      <div className="img-container">
        <div className="img-inner">
          <div className="inner-skew">
            <img alt="" src={teacher.img} />
          </div>
        </div>
      </div>
      <div className="text-container">
        <h3 className="h3-name">{teacher.name}</h3>
        <h5>
          Adress: <strong>{teacher.adress}</strong>
        </h5>
        <h6>
          Salary: <strong>${teacher.salary}</strong>
        </h6>
        <p>
          E-mail: <strong>{teacher.email}</strong>
        </p>
        <div></div>
      </div>
    </div>
  );
};

export default TeachersCard;
