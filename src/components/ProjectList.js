import React from "react";
import Project from "./Project";
import Dashboard from "./Dashboard";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

function ProjectList(props) {
return (
    <div className="home">
    <div class="container">
        <div class="row align-items-center my-5 mx-5">
        <div class="col-lg-4">
            <Link className="navbar-brand" to="/dashboard">
                <Project />
            </Link>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title.</p>
                </div>
            </div>
        </div>
        </div>
        <div class="row align-items-center my-5 mx-5">
        <div class="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title.</p>
                </div>
            </div>
        </div>
        <div class="col-lg-4">
            <div class="card">
                <img src="http://placehold.it/900x400" class="card-img-top" alt=""></img>
                <div class="card-body">
                    <p class="card-text">Some quick example text to build on the card title.</p>
                </div>
            </div>
        </div>
        </div>

    </div>
    </div>
);
}

export default withRouter(ProjectList);
