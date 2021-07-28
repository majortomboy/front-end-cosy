import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Project(props) {

    // const getPhoto = () => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/media/uploads`)
    //     .then((response) => {
    //         console.log(response.data);
    //         const newProjectData = response.data;
    //         setProjectData(newProjectData);
    //     })
    //     .catch((error) => {
    //         console.log("Could not retrieve data");
    //     });


    return (
        <div className="col-lg-4">
            <Link className="navbar-brand" to={`/dashboard/${props.project_id}`}>
                <div className="card">
                    <img src={props.photo} alt="placeholder" className="card-img-top"></img>
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
