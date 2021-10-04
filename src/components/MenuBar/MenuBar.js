import React from "react";
import "./MenuBar.css";
import { faSchool } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MenuBar = () => {
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-container navbar navbar-dark bg-dark">
                <h1 to="" className="items m-0">
                <h1 to="/home">
                  <li className=" site-name"> <FontAwesomeIcon icon={faSchool} /> Chandpur University</li>
                  </h1>
                </h1>
               <ul className="d-flex align-items-end ms-auto justify-content-end">
                <Link to="/home" className="items">
                  <li>Home</li>
                </Link>
                <Link to="/courses" className="items">
                  <li>Courses</li>
                </Link>
                <Link to="/teachers" className="items">
                  <li>Teachers</li>
                </Link>
                <Link to="/about" className="items">
                  <li>About Us</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
