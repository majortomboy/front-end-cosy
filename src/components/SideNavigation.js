
import React from "react";
import { Link, withRouter, NavLink } from "react-router-dom";

function SideNavigation(props) {

    return (
        <nav id="sidebar" className="col-sm-3 col-md-3 col-lg-2 d-md-block sidebar text-start">
        <ul className="nav flex-column my-5">
            {/* <li className="nav-item">
                <NavLink className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/`}>
                    <span className="ml-2">Dashboard</span>
                </NavLink>
            </li> */}
            <li className="nav-item">
                <NavLink className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/todo/`}>
                    <span className="ml-2">To Do List</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/tobuy/`}>
                    <span className="ml-2">To Buy List</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link h5 disabled" to={`/dashboard/${props.id}/references/`}>
                    <span className="ml-2">Reference Photos</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link h5 disabled" to={`/dashboard/${props.id}/resources/`}>
                    <span className="ml-2">Resources</span>
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link h5 disabled" to={`/dashboard/${props.id}/settings/`}>
                    <span className="ml-2">Settings</span>
                </NavLink>
            </li>
        </ul>
        </nav>
    )
};

export default SideNavigation;
