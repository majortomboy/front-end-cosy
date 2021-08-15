import { React, useEffect, useState } from "react";
import axios from "axios";
import Task from "./Task";
// import ToDoPart from "./ToDoPart";
import NewTaskForm from "./NewTaskForm";
import EditPartForm from "./EditPartForm";

const TaskCard = (props) => {

    const [taskData, setTaskData] = useState([]);
    const [partData, setPartData] = useState(props);

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
        if (partData.completed === true) {
            return (<i className="bi bi-check-circle-fill icon-success"></i>)
        }
        else {
            return (<i></i>)
        }
    }

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
        return (<Task task_id={task.id} description={task.description} completed={task.completed} part_id={task.part} taskData={taskData} setTaskData={setTaskData}/>)
    });

    const editPart = (part) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
            .then((response) => {
                console.log(response.data);
                console.log(taskData)
                const newPartData = response.data;

                // setTaskData(taskData)
                setPartData(newPartData)
                // console.log(partData)
                // setTaskData(taskData)
                // console.log(taskData)
                // partData.setToDoListData(newPartData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to edit part.");
            });
    }

    const deletePart = (part) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
            .then((response) => {
                const newtoDoListData = partData.toDoListData.filter((existingPart) => {
                    return existingPart.id !== props.part_id
                });

                partData.setToDoListData(newtoDoListData)
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
                            <h5>{greenCheck()} {partData.name} {<EditPartForm part_id={partData.part_id} name={partData.name} project={partData.project} completed={partData.completed} editPart={editPart} deletePart={deletePart} partData={partData} setPartData={setPartData} taskData={taskData} setTaskData={setTaskData}></EditPartForm>}</h5>
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



    // const completePart = (tasks) => {
    //     tasks.forEach((task) => {
    //         if (task.completed === false) {
    //             axios.patch(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, {
    //                 completed: false
    //             })
    //             .then((response) => {
    //                 console.log(response.data.completed);
    //                 const newPartCompletedData = response.data.completed;

    //                 // greenCheck()
    //                 setPartCompletedData(newPartCompletedData)
    //             })
    //                 .catch((error) => {
    //                     console.log(error);
    //                 // alert("Unable to edit part.");
    //             })
    //             return
    //         }
    //     })
    //     axios.patch(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, {
    //         completed: true
    //     })
    //         .then((response) => {
    //         console.log(response.data.completed);
    //         const newPartCompletedData = response.data.completed;

    //         setPartCompletedData(newPartCompletedData)
    //         // greenCheck()
    //     })
    //         .catch((error) => {
    //             console.log(error);
    //         // alert("Unable to edit part.");
    //     });
    // }

    // const partElements = partData.map((part) => {
    //     return (<ToDoPart part_id={part.id} name={part.name} completed={part.completed} project={part.project} completePart={completePart} partData={partData} setPartData={setPartData}/>)
    // });

        // const deletePart = (part) => {
    //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
    //         .then((response) => {
    //             console.log(response.data);
    //             // alert("Part deleted.");
    //             window.location.reload(true);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to delete part.");
    //         })
    // }

        // const editPart = (part) => {
    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
    //         .then((response) => {
    //             console.log(response.data.name);
    //             console.log(response.data.completed);
    //             const newPartNameData = response.data.name;
    //             const newPartCompletedData = response.data.completed;

    //             setPartNameData(newPartNameData)
    //             setPartCompletedData(newPartCompletedData)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to edit part.");
    //         });
    // }

    // const [partNameData, setPartNameData] = useState(props.name);
    // const [partCompletedData, setPartCompletedData] = useState(props.completed);
