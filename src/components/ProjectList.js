import { React, useEffect, useState } from "react";
import Project from "./Project";
import NewProjectForm from "./NewProjectForm";
import axios from "axios";
import {
    BrowserRouter as Router,
    withRouter
} from 'react-router-dom';

function ProjectList() {

    const [projectData, setProjectData] = useState([]);
    // State for modal being open or closed
    // Does this need to go here or in NewProjectForm?
    const [isModalVisible, setIsModalVisible] = useState(false);
    const toggleModal = () => {setIsModalVisible(!isModalVisible)}

    const getProjects = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects`)
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
    // I want this to watch for whether or not ProjectData is changed, and then re-render the components

    const projectElements = projectData.map((project) => {
        return (<Project project_id={project.id} title={project.title} series={project.series} photo={project.photo}/>)
    });

    // Where does this get passed in/called?
    // Should this be passed as a prop to a create project button component?
    const createNewProject = (newProject) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/projects/`, newProject)
            .then((response) => {
                console.log(response.data);
                const newProjectData = response.data
                const newData = [...projectData]

                newData.push(newProjectData)
                console.log(newData);

                setProjectData(newData)
            })
            .catch((error) => {
                console.log(`${error.response.data}`);
                alert("Unable to create new project.");
            });
    }

    return (
        <div className="home">
        <div className="container">
            {/* When I click this button, I want the modal to open */}
            <button className="btn btn-primary my-3" onClick={toggleModal}>
                + Project
            </button>
                {isModalVisible ? <NewProjectForm createNewProject={createNewProject}></NewProjectForm> : ''}
            <div className="row align-items-center my-5 mx-5">
                {projectElements}
            </div>
            </div>
        </div>
    );
}

export default withRouter(ProjectList);
