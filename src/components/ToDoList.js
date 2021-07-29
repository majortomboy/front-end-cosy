import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import TaskCard from "./TaskCard";
import { useParams } from "react-router-dom";
import SideNavigation from "./SideNavigation";

function ToDoList(props) {

    let { id } = useParams();
    // console.log(id)

    const [toDoListData, setToDoListData] = useState([]);

    const getParts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts`)
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

    // Where does this get passed in/called?
    // Should this be passed as a prop to a create project button component?
    const createNewTask = (newTask) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts`, newTask)
            .then((response) => {
                console.log(response.data);
                const newToDoListData = response.data
                const newData = [...toDoListData]

                newData.push(newToDoListData)
                console.log(newData);

                setToDoListData(newData)
            })
            .catch((error) => {
                console.log(`${error.response.data}`);
                alert("Unable to create new task.");
            });
    }

    const toDoListElements = toDoListData.map((part) => {
        return (<TaskCard part_id={part.id} name={part.name} project_id={part.project} />)
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    <button className="btn btn-primary my-3">
                        + Part
                    </button>
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
