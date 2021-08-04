import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import logo from "./COSYlogo.svg";

function Navigation(props) {
    return (
    <div className="navigation">
        <nav id="topnav" className="navbar navbar-expand navbar-light">
        <div className="container">
            <NavLink className="navbar-brand" to="/projects">
                <img src={logo} alt="logo" width="150"></img>
            </NavLink>

            <div>
            <ul className="navbar-nav ml-auto">
                <li
                className={`nav-item  ${
                    props.location.pathname === "/projects" ? "active" : ""
                }`}
                >
                <NavLink className="nav-link link-dark" to="/projects">
                    Projects
                </NavLink>
                </li>
                <li className={`nav-item  ${
                    props.location.pathname === "/about" ? "active" : ""
                }`}
                >
                <NavLink className="nav-link link-dark" to="/about">
                    About
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
}

export default withRouter(Navigation);
