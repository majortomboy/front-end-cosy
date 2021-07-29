import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Project(props) {

    return (
        <div className="col-lg-4">
            <Link className="navbar-brand" to={`/dashboard/${props.project_id}`}>
                <div className="card">
                    <img src={props.photo} alt="placeholder" className="card-img-top image-fluid"></img>
                    <div className="card-body">
                        <p className="card-text fw-bold">{props.title}</p>
                        <p className="card-text fst-italic">{props.series}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Project;
