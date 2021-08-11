import { React, useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";
import EditPartForm from "./EditPartForm";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);
    const [partNameData, setPartNameData] = useState(props.name);
    const [partCompletedData, setPartCompletedData] = useState(props.completed);

    const getTasks = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/tasks/`)
            .then((response) => {
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

    const greenCheck = () => {
        if (props.completed === true) {
            return (<i className="bi bi-check-circle-fill icon-success"></i>)
        }
        else {
            return (<i></i>)
        }
    }

    const completePart = (tasks) => {
        tasks.forEach((task) => {
            if (task.completed === false) {
                axios.patch(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, {
                    completed: false
                })
                .then((response) => {
                    console.log(response.data.completed);
                    const newPartCompletedData = response.data.completed;

                    setPartCompletedData(newPartCompletedData)
                    greenCheck()
                })
                    .catch((error) => {
                        console.log(error);
                    // alert("Unable to edit part.");
                })
                return
            }
        })
        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, {
            completed: true
        })
            .then((response) => {
            console.log(response.data.completed);
            const newPartCompletedData = response.data.completed;

            setPartCompletedData(newPartCompletedData)
            greenCheck()
        })
            .catch((error) => {
                console.log(error);
            // alert("Unable to edit part.");
        });
    }

    // useEffect(() => {
    //     completePart();
    // }, [taskData])

    const createNewTask = (newTask) => {
        console.log(newTask)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/tasks/`, newTask)
            .then((response) => {
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
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part_id={task.part} taskData={taskData} partCompletedData={partCompletedData} completePart={completePart} greenCheck={greenCheck}/>)
        // completePart={completePart(taskData)}
    });

    const editPart = (part) => {
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
                // alert("Part deleted.");
                window.location.reload(true);
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete part.");
            })
    }

    return (
            <div className="col-lg-4">
                <div className="card my-3 mx-3 px-4 py-4">
                    <div className="row">
                        <div className="column">
                            <h5>{greenCheck()} {partNameData} {<EditPartForm part_id={props.part_id} name={props.name} project={props.project} editPart={editPart} deletePart={deletePart}></EditPartForm>}</h5>
                        </div>
                    </div>
                    <table>
                        <th>
                        </th>
                        {taskElements}
                    </table>
                    {<NewTaskForm createNewTask={createNewTask} part_id={props.part_id}></NewTaskForm>}
                </div>
            </div>
    )
}

export default TaskCard;
