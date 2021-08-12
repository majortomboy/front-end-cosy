import { React, useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
import ToDoPart from "./ToDoPart";
import NewTaskForm from "./NewTaskForm";
import EditPartForm from "./EditPartForm";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);
    // const [partData, setPartData] = useState(props);
    const [partNameData, setPartNameData] = useState(props.name);
    const [partCompletedData, setPartCompletedData] = useState(props.completed);

    // const getParts = () => {
    //     axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${props.project}/parts/`)
    //         .then((response) => {
    //             console.log(response.data);
    //             const newPartData = response.data;
    //             setPartData(newPartData);
    //         })
    //         .catch((error) => {
    //             console.log(`${error.response.data}`)
    //             alert("Could not retrieve data.");
    //         });
    // }

    // useEffect(() => {
    //     getParts();
    // }, [])

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
        if (partCompletedData === true) {
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

                    // greenCheck()
                    setPartCompletedData(newPartCompletedData)
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
            // greenCheck()
        })
            .catch((error) => {
                console.log(error);
            // alert("Unable to edit part.");
        });
    }

    // const partElements = partData.map((part) => {
    //     return (<ToDoPart part_id={part.id} name={part.name} completed={part.completed} project={part.project} completePart={completePart} partData={partData} setPartData={setPartData}/>)
    // });

    const createNewTask = (newTask) => {
        console.log(newTask)
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/tasks/`, newTask)
            .then((response) => {
                const newTaskData = response.data
                const newData = [...taskData]

                newData.push(newTaskData)

                setTaskData(newData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to create new task.");
            });
    }

    const taskElements = taskData.map((task) => {
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part_id={task.part}/>)
    });

    const editPart = (part) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
            .then((response) => {
                console.log(response.data.name);
                console.log(response.data.completed);
                const newPartNameData = response.data.name;
                const newPartCompletedData = response.data.completed;

                setPartNameData(newPartNameData)
                setPartCompletedData(newPartCompletedData)
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
                            <div className="d-flex justify-content-center align-items-center">
                            {/* {<ToDoPart part_id={props.id} name={props.name} completed={props.completed} project={props.project}></ToDoPart>} */}
                            <h5>{greenCheck()} {partNameData} {<EditPartForm part_id={props.part_id} name={props.name} project={props.project} completed={props.completed} editPart={editPart} deletePart={deletePart} setPartNameData={setPartNameData} partCompletedData={partCompletedData} partNameData={partNameData} setPartCompletedData={setPartCompletedData}></EditPartForm>}</h5>
                            {/* {<EditPartForm part_id={props.part_id} name={props.name} project={props.project} completed={props.completed} editPart={editPart} deletePart={deletePart} partNameData={partNameData} setPartNameData={setPartNameData}></EditPartForm>} */}
                            </div>
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
