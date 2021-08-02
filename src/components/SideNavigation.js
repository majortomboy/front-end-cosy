
import React from "react";
import { Link, withRouter } from "react-router-dom";

function SideNavigation(props) {

    return (
        <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar text-start">
        <ul class="nav flex-column my-5">
            <li class="nav-item">
                <Link class="nav-link active h5" to={`/dashboard/${props.id}/`}>
                    <span class="ml-2">Dashboard</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link active h5" to={`/dashboard/${props.id}/todo/`}>
                    <span class="ml-2">To Do List</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link h5" to={`/dashboard/${props.id}/tobuy/`}>
                    <span class="ml-2">To Buy List</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link h5 disabled" to={`/dashboard/${props.id}/references/`}>
                    <span class="ml-2">Reference Photos</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link h5 disabled" to={`/dashboard/${props.id}/resources/`}>
                    <span class="ml-2">Resources</span>
                </Link>
            </li>
            <li class="nav-item">
                <Link class="nav-link h5 disabled" to={`/dashboard/${props.id}/settings/`}>
                    <span class="ml-2">Settings</span>
                </Link>
            </li>
        </ul>
        </nav>
    )
};

export default SideNavigation;
