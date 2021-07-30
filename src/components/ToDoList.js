import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import NewPartForm from "./NewPartForm";

function ToDoList() {

    let { id } = useParams();
    // console.log(id)

    const [toDoListData, setToDoListData] = useState([]);

    const getParts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts/`)
            .then((response) => {
                console.log(response.data);
                const newToDoListData = response.data;
                setToDoListData(newToDoListData);
            })
            .catch((error) => {
                console.log(`${error.response.data}`)
                alert("Could not retrieve data.");
            });
    }

    useEffect(() => {
        getParts();
    }, [])

    const createNewPart = (newPart) => {
        console.log(newPart)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/parts/`, newPart)
            .then((response) => {
                console.log(response.data);
                const newToDoListData = response.data
                const newData = [...toDoListData]

                newData.push(newToDoListData)
                console.log(newData);

                setToDoListData(newData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to create new part.");
            });
    }

    // Where does this get passed in/called?
    // Should this be passed as a prop to a create project button component?

    const toDoListElements = toDoListData.map((part) => {
        return (<TaskCard part_id={part.id} name={part.name} />)
    });

    // const editPartInfo = (part) => {
    //     console.log(part)
    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts/${}`, part)
    //         .then((response) => {
    //             console.log(response.data);
    //             const newDashboardData = response.data;

    //             setDashboardData(newDashboardData)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to edit project.");
    //         });
    // }

    // const deletePart = (project) => {
    //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/`, project)
    //         .then((response) => {
    //             console.log(response.data);
    //             alert("Project deleted.");
    //             // <Redirect to="/projects"></Redirect>
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to delete project.");
    //         })
    // }

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    {<NewPartForm createNewPart={createNewPart} project_id={id}></NewPartForm>}
                    <div className="row align-items-center my-5 mx-5">
                        <div className="card-group space-between">
                            {toDoListElements}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ToDoList;
