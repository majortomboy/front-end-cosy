import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
// import DeleteButton from "./DeleteButton";
import EditPartForm from "./EditPartForm";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);
    const [partNameData, setPartNameData] = useState(props.name);
    // console.log(partNameData)

    const getTasks = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/tasks/`)
            .then((response) => {
                // console.log(response.data);
                const newTaskData = response.data;
                setTaskData(newTaskData);
            })
            .catch((error) => {
                console.log(error)
                alert("Could not retrieve data.");
            });
    }

    useEffect(() => {
        getTasks();
    }, [])

    const createNewTask = (newTask) => {
        console.log(newTask)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/tasks/`, newTask)
            .then((response) => {
                // console.log(response.data);
                const newTaskData = response.data
                const newData = [...taskData]

                newData.push(newTaskData)
                // console.log(newData);

                setTaskData(newData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to create new task.");
            });
    }

    const taskElements = taskData.map((task) => {
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part_id={task.part} />)
    });

    const editPart = (part) => {
        // console.log(props.part_id)
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
            .then((response) => {
                console.log(response.data.name);
                const newPartNameData = response.data.name;

                setPartNameData(newPartNameData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to edit part.");
            });
    }

    const deletePart = (part) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
            .then((response) => {
                console.log(response.data);
                alert("Part deleted.");
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete part.");
            })
    }

    return (
            <div className="col-lg-4">
                <div className="card my-3 mx-3">
                    <div className="row">
                        <div className="column">
                            <h5>{partNameData} {<EditPartForm part_id={props.part_id} name={props.name} project={props.project} editPart={editPart} deletePart={deletePart}></EditPartForm>}</h5>
                        </div>
                    </div>
                    {/* <button className="btn btn-danger" onClick={deletePart}><i className="bi bi-trash" aria-hidden="true"></i></button> */}
                    <ul className="list-group text-start">
                        {taskElements}
                    </ul>
                    {<NewTaskForm createNewTask={createNewTask} part_id={props.part_id}></NewTaskForm>}
                </div>
            </div>
    )
}

export default TaskCard;
