import { React, useState, useEffect} from "react";
import axios from "axios";
import EditTaskForm from "./EditTaskForm";

function Task(props) {

    const [singleTaskData, setSingleTaskData] = useState([]);

    useEffect(() => {
        setSingleTaskData({
            description: props.description,
            completed: props.completed
        });
    }, [props])

    const editTask = (task) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.task_id}/`, task)
            .then((response) => {
                console.log(response.data);
                const newTaskData = response.data;

                setSingleTaskData(newTaskData)

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

                setSingleTaskData(singleTaskData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete task.");
            })
    }

    const changeCheckbox = (task) => {

        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/tasks/${props.task_id}/`, {
            completed: !task.completed
        })
        .then((response) => {
            console.log(response.data);
            const newTaskData = response.data;

            setSingleTaskData(newTaskData)
        })
    }

    return (
        <tr className="">
            <td><input className="form-check-input me-1" type="checkbox" checked={singleTaskData.completed}></input></td>
            <td>{singleTaskData.description}</td>
            <td><EditTaskForm task_id={singleTaskData.task_id} description={singleTaskData.description} completed={singleTaskData.completed} part_id={props.part_id} editTask={editTask}></EditTaskForm></td>
            <td><span color="none" className="btn d-inline-block float-right" onClick={deleteTask}><i className="bi bi-trash" aria-hidden="true"></i></span></td>
        </tr>
    )
}

export default Task;
