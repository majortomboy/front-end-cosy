import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import Task from "./Task";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);

    const getTasks = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/tasks`)
            .then((response) => {
                console.log(response.data);
                const newTaskData = response.data;
                setTaskData(newTaskData);
            })
            .catch((error) => {
                console.log(`${error.response.data}`)
                // alert("Could not retrieve data.");
            });
    }

    useEffect(() => {
        getTasks();
    }, [])

    const taskElements = taskData.map((task) => {
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part_id={task.part} />)
    });

    return (
            <div className="col-lg-4">
                <div className="card my-3 mx-3">
                    <h5>{props.name}</h5>
                    <ul className="list-group text-start">
                        {taskElements}
                    </ul>
                    <button className="btn btn-primary my-3">
                    + task
                    </button>
                </div>
            </div>
    )
}

export default TaskCard;
