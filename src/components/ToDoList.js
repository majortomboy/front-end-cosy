import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import TaskCard from "./TaskCard";
import { useParams, NavLink } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import NewPartForm from "./NewPartForm";
// import ToDoPart from "./ToDoPart";

function ToDoList() {

    let { id } = useParams();

    const [toDoListData, setToDoListData] = useState([]);

    const getParts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts/`)
            .then((response) => {
                // console.log(response.data);
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

    const toDoListElements = toDoListData.map((part) => {
        return (<TaskCard part_id={part.id} name={part.name} completed={part.completed} project={id} toDoListData={toDoListData} setToDoListData={setToDoListData}/>)
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    <div className="d-flex justify-space-between align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><NavLink className="link-secondary" to={`/dashboard/${id}/`}>Dashboard</NavLink></li>
                                    <li class="breadcrumb-item active" aria-current="page">To Do List</li>
                                </ol>
                            </nav>
                    {<NewPartForm createNewPart={createNewPart} project_id={id}></NewPartForm>}
                    </div>
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

    // const toDoParts = toDoListData.map((part) => {
    //     return (<ToDoPart part_id={part.id} name={part.name} completed={part.completed} project={id} getParts={getParts}/>)
    // });

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
