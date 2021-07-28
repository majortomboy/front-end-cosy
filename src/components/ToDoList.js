import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import Task from "./Task";

function ToDoList() {

    const [toDoListData, setToDoListData] = useState([]);

    const getTasks = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/tasks`)
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
        getTasks();
    }, [])

    // Where does this get passed in/called?
    // Should this be passed as a prop to a create project button component?
    const createNewTask = (newTask) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/tasks/`, newTask)
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

    const toDoListElements = toDoListData.map((task) => {
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part={task.part} create_task={createNewTask}/>)
    });

    return (

        <section>
            <h3>To Do List</h3>
            <div className="col-sm-6 col-lg-3">
                <h5>[PART]</h5>
                {toDoListElements}
                <button className="btn btn-primary my-3">
                + task
                </button>
            </div>
        </section>
    )
}

export default ToDoList;
