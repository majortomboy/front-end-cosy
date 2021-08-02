import { React, useEffect, useState } from "react";
import Project from "./Project";
import NewProjectForm from "./NewProjectForm";
import FileUpload from "./FileUpload";
import ImgUpload from "./ImageUploadTest";
import axios from "axios";
import {
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom';

function ProjectList() {

    const [projectData, setProjectData] = useState([]);

    const getProjects = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/`)
            .then((response) => {
                console.log(response.data);
                const newProjectData = response.data;
                setProjectData(newProjectData);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    useEffect(() => {
        getProjects();
    }, [])

    const projectElements = projectData.map((project) => {
        return (<Project project_id={project.id} title={project.title} series={project.series} due_date={project.due_date} budget={project.budget} photo={project.photo}/>)
    });

    const createNewProject = (newProject) => {
        console.log(newProject)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/projects/`, newProject, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
            .then((response) => {
                console.log(response.data);
                const newProjectData = response.data
                const newData = [...projectData]

                newData.push(newProjectData)
                console.log(newData);

                setProjectData(newData)
            })
            .catch((error) => {
                console.log(error);
                // alert("Unable to create new project.");
            });
    }

    return (
        <div className="home">
        <div className="container">
            <div className="row">
                <div className="col-lg-11">
                    {<NewProjectForm createNewProject={createNewProject}></NewProjectForm>}
                    {<ImgUpload></ImgUpload>}
                </div>
            </div>
            <div className="row my-5 mx-5">
                <div className="card-group">
                    {projectElements}
                </div>
            </div>
            </div>
        </div>
    );
}

export default withRouter(ProjectList);
