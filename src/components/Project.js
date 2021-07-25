import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

function Project(props) {

    // const getDashboardElements = projectData.map((project) => {
    //     return (<Dashboard project_id={project.id} title={project.title} series={project.series} photo={project.photo} budget={project.budget}/>)
    // });

    return (
        <div className="col-lg-4">
            <Link className="navbar-brand" to={`/dashboard/${props.project_id}`}>
                <div className="card">
                    <img src={props.photo} className="card-img-top" alt=""></img>
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
