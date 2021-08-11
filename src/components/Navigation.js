import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import logo from "./COSY-logo.svg";

function Navigation(props) {

    // if user is not authenticated:
    // if access key is none...:

    if (localStorage.getItem('access_token') === ''){
        return (
            <div className="navigation">
                <nav id="topnav" className="navbar navbar-expand navbar-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/projects">
                        <img src={logo} alt="logo" width="150"></img>
                    </NavLink>

                    <div>
                    <ul className="navbar-nav ml-auto">
                        <li className={`nav-item  ${
                            props.location.pathname === "/login" ? "active" : ""
                        }`}
                        >
                        <NavLink className="nav-link link-dark" to="/login">
                            Log In
                        </NavLink>
                        </li>
                        <li className={`nav-item  ${
                            props.location.pathname === "/register" ? "active" : ""
                        }`}
                        >
                        <NavLink className="nav-link link-dark" to="/register">
                            Sign Up
                        </NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>
            );
    }
    else {
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
                    props.location.pathname === "/login" ? "active" : ""
                }`}
                >
                <NavLink className="nav-link link-dark" to="/login">
                    Log Out
                </NavLink>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
    );
    }


    // return (
    // <div className="navigation">
    //     <nav id="topnav" className="navbar navbar-expand navbar-light">
    //     <div className="container">
    //         <NavLink className="navbar-brand" to="/projects">
    //             <img src={logo} alt="logo" width="150"></img>
    //         </NavLink>

    //         <div>
    //         <ul className="navbar-nav ml-auto">
    //             <li
    //             className={`nav-item  ${
    //                 props.location.pathname === "/projects" ? "active" : ""
    //             }`}
    //             >
    //             <NavLink className="nav-link link-dark" to="/projects">
    //                 Projects
    //             </NavLink>
    //             </li>
    //             <li className={`nav-item  ${
    //                 props.location.pathname === "/login" ? "active" : ""
    //             }`}
    //             >
    //             <NavLink className="nav-link link-dark" to="/login">
    //                 Login
    //             </NavLink>
    //             </li>
    //             <li className={`nav-item  ${
    //                 props.location.pathname === "/register" ? "active" : ""
    //             }`}
    //             >
    //             <NavLink className="nav-link link-dark" to="/register">
    //                 Sign Up
    //             </NavLink>
    //             </li>
    //             {/* <li className={`nav-item  ${
    //                 props.location.pathname === "/about" ? "active" : ""
    //             }`}
    //             >
    //             <NavLink className="nav-link link-dark" to="/about">
    //                 About
    //             </NavLink>
    //             </li> */}
    //         </ul>
    //         </div>
    //     </div>
    //     </nav>
    // </div>
    // );
}

export default withRouter(Navigation);
