import React, { useContext } from "react";
import "./MenuBar.css";
import logo from "../..//images/logo/baller-logo-3.png";
import { Link } from "react-router-dom";
import { userContext } from "./../../App";

const MenuBar = () => {
  const [user, setUser] = useContext(userContext);
  console.log(user);
  return (
    <div className="MenuBar-container">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="menu-container navbar navbar-dark bg-dark">
                <h1 to="" className="items m-0">
                  <li className=" site-name">Chandpur University</li>
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
