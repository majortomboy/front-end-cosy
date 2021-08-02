import { React, useState, useEffect} from "react";
import axios from "axios";
import EditTaskForm from "./EditTaskForm";

function Task(props) {

    const [taskData, setTaskData] = useState([]);

    useEffect(() => {
        setTaskData({
            description: props.description,
            completed: props.completed
        });
    }, [props])

    const editTask = (task) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.task_id}/`, task)
            .then((response) => {
                console.log(response.data);
                const newTaskData = response.data;

                setTaskData(newTaskData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to edit task.");
            });
    }

    const deleteTask = (task) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.task_id}/`, task)
            .then((response) => {
                console.log(response.data);
                alert("Task deleted.");
                // window.location.reload(true);

                setTaskData(taskData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete task.");
            })
    }

    const changeCheckbox = (task) => {

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.task_id}/`, task)
        .then((response) => {
            console.log(response.data);
            const newTaskData = response.data;

            setTaskData(newTaskData)
        })
    }

    return (
        <tr>
            <td><input className="form-check-input me-1" type="checkbox" checked={taskData.completed}></input></td>
            <td>{taskData.description}</td>
            <td><EditTaskForm task_id={taskData.task_id} description={taskData.description} completed={taskData.completed} part_id={props.part_id} editTask={editTask}></EditTaskForm></td>
            <td><span color="none" className="btn d-inline-block float-right" onClick={deleteTask}><i className="bi bi-trash" aria-hidden="true"></i></span></td>
        </tr>
    )
}

export default Task;
