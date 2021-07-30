import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);

    const getTasks = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/tasks/`)
            .then((response) => {
                console.log(response.data);
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
                console.log(response.data);
                const newTaskData = response.data
                const newData = [...taskData]

                newData.push(newTaskData)
                console.log(newData);

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

    return (
            <div className="col-lg-4">
                <div className="card my-3 mx-3">
                    <h5>{props.name}</h5>
                    <ul className="list-group text-start">
                        {taskElements}
                    </ul>
                    {<NewTaskForm createNewTask={createNewTask} part_id={props.part_id}></NewTaskForm>}
                </div>
            </div>
    )
}

export default TaskCard;
