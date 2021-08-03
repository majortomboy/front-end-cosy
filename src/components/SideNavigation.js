
import React from "react";
import { Link, withRouter } from "react-router-dom";

function SideNavigation(props) {

    return (
        <nav id="sidebar" className="col-sm-2 col-md-3 col-lg-2 d-md-block bg-light sidebar text-start">
        <ul className="nav flex-column my-5">
            <li className="nav-item">
                <Link className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/`}>
                    <span className="ml-2">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/todo/`}>
                    <span className="ml-2">To Do List</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link h5 link-secondary" to={`/dashboard/${props.id}/tobuy/`}>
                    <span className="ml-2">To Buy List</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link h5 disabled" to={`/dashboard/${props.id}/references/`}>
                    <span className="ml-2">Reference Photos</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link h5 disabled" to={`/dashboard/${props.id}/resources/`}>
                    <span className="ml-2">Resources</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link h5 disabled" to={`/dashboard/${props.id}/settings/`}>
                    <span className="ml-2">Settings</span>
                </Link>
            </li>
        </ul>
        </nav>
    )
};

export default SideNavigation;
