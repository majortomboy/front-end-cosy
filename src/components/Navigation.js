import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./COSYlogo.svg";

function Navigation(props) {
    return (
    <div className="navigation">
        <nav className="navbar navbar-expand navbar-light bg-primary">
        <div className="container">
            <Link className="navbar-brand" to="/projects">
                <img src={logo} alt="logo" width="150"></img>
            </Link>

            <div>
            <ul className="navbar-nav ml-auto">
                <li
                className={`nav-item  ${
                    props.location.pathname === "/projects" ? "active" : ""
                }`}
                >
                <Link className="nav-link" to="/projects">
                    Projects
                </Link>
                </li>
                <li className={`nav-item  ${
                    props.location.pathname === "/about" ? "active" : ""
                }`}
                >
                <Link className="nav-link" to="/about">
                    About
                </Link>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
}

export default withRouter(Navigation);
