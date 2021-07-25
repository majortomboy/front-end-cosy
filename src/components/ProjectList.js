import { React, useEffect, useState } from "react";
import Project from "./Project";
import Dashboard from "./Dashboard";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from 'react-router-dom';

function ProjectList() {

    const [projectData, setProjectData] = useState([]);

    const getProjects = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/projects`)
            .then((response) => {
                console.log(response.data);
                const newProjectData = response.data;
                setProjectData(newProjectData);
            })
            .catch((error) => {
                console.log("Could not retrieve data");
            });
    }

    useEffect(() => {
        getProjects();
    }, [])

    const projectElements = projectData.map((project) => {
        return (<Project project_id={project.id} title={project.title} series={project.series} photo={project.photo}/>)
    });

    return (
        <div className="home">
        <div className="container">
            <div className="row align-items-center my-5 mx-5">
                {projectElements}
            </div>
            <div className="row align-items-center my-5 mx-5">
            <div className="col-lg-4">
                <div className="card">
                    <img src="http://placehold.it/900x400" className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src="http://placehold.it/900x400" className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title.</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4">
                <div className="card">
                    <img src="http://placehold.it/900x400" className="card-img-top" alt=""></img>
                    <div className="card-body">
                        <p className="card-text">Some quick example text to build on the card title.</p>
                    </div>
                </div>
            </div>
            </div>

        </div>
        </div>
    );
}

export default withRouter(ProjectList);
