import { React, useState, useEffect } from "react";
import axios from "axios";
import { Redirect, useParams } from "react-router-dom";
import Part from "./Part"
import SideNavigation from "./SideNavigation";
import EditProjectForm from "./EditProjectForm";
import DeleteButton from "./DeleteButton";
import CompletionChart from "./CompletionChart";
import BudgetChart from "./BudgetChart";

function Dashboard() {

    let { id } = useParams();

    const [dashboardData, setDashboardData] = useState([]);
    const [partsData, setPartsData] = useState([]);
    const [toBuyListData, setToBuyListData] = useState([]);

    useEffect (() => {
        const getItems = () => {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/tobuyitems/`)
                .then((response) => {
                    console.log(response.data);
                    const newToBuyListData = response.data;
                    setToBuyListData(newToBuyListData);
                })
                .catch((error) => {
                    console.log(`${error.response.data}`)
                    alert("Could not retrieve data.");
                });
    }
    getItems();
}, [id]);

    const getDashboardInfo = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}`)
            .then((response) => {
                console.log(response.data);
                const newDashboardData = response.data;
                setDashboardData(newDashboardData);
            })
            .catch(() => {
                console.log("Could not retrieve data");
            });
    }

    useEffect(() => {
        getDashboardInfo();

    }, [])

    const editDashboardInfo = (project) => {
        console.log(project)
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/`, project)
            .then((response) => {
                console.log(response.data);
                const newDashboardData = response.data;

                setDashboardData(newDashboardData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to edit project.");
            });
    }

    const deleteProject = (project) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/`, project)
            .then((response) => {
                console.log(response.data);
                alert("Project deleted.");
                // <Redirect to="/projects"></Redirect>
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete project.");
            })
    }

    const getParts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts`)
            .then((response) => {
                console.log(response.data)
                const newPartsData = response.data
                setPartsData(newPartsData);
                })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    const completionPercentage = (parts) => {
        let part_count = 0;
        let completed = 0;
        parts.forEach((part) => {
            part_count += 1
            if (part.completed === true) {
                completed += 1
            }
        })
        let percentage = Math.floor((completed / part_count)*100)
        return percentage
    }

    useEffect(() => {
        getParts();

    }, [])

    const displayParts = partsData.map((part) => {
        return (<Part part_id={part.id} name={part.name} completed={part.completed} project={part.project}/>)
    });

    const itemTotal = (data) => {
        let total = 0;
        console.log(data)
        data.forEach((item) => {
            console.log(item.price)
            total = total + parseInt(item.price)
        })
        return total
    }

    const placeholderImage = () => {
        if (dashboardData.photo !== null) {
            return (<img className="border border-rounded rounded bg-white h-50 px-4 py-4" src={dashboardData.photo} alt="character"/>)
        }
        else {
            return (<img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081" alt="placeholder" className="border border-rounded rounded bg-white h-50 px-4 py-4"></img>)
        }
    }


    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                        {<EditProjectForm project_id={id} title={dashboardData.title} series={dashboardData.series} due_date={dashboardData.due_date} budget={dashboardData.budget} editProject={editDashboardInfo}></EditProjectForm>}
                <div className="row">
                    <div className="col-lg-4">
                        <div className="row">
                            {placeholderImage()}
                            {/* <img className="border border-rounded rounded bg-white h-50 px-4 py-4" src={dashboardData.photo} alt="character"/> */}
                        </div>
                        {/* <div className="row"> */}
                            <div className="row">
                                <div className="col-lg-12 my-5 border border-rounded rounded bg-white px-4 py-4">
                                    <h4>Parts</h4>
                                    <br></br>
                                    {displayParts}
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div className="col-lg-8">
                        <div className="row text-start">
                            <div className="col-lg-11 mx-4 border border-rounded rounded bg-white px-4 py-4">
                            <p className="display-4">{dashboardData.title}</p>
                            <h4 className="fst-italic">{dashboardData.series}</h4>
                            <h4 className="fw-bold">Due Date: {dashboardData.due_date}</h4>
                            </div>
                        </div>
                        <div className="row my-5">
                            <div className="col-lg-5 mx-4 border border-rounded rounded bg-white px-4 py-4">
                                {/* <div className="card"> */}
                                <h4 className="pb-3">Budget</h4>
                                    {<BudgetChart itemTotal={itemTotal(toBuyListData)} budget={dashboardData.budget}></BudgetChart>}
                                    <br></br>
                                    <h4>${dashboardData.budget}</h4>
                                {/* </div> */}
                            </div>
                            <div className="col-lg-5 mx-4 border border-rounded rounded bg-white px-4 py-4">
                                {/* <div className="card"> */}
                                <h4 className="pb-3">Completion</h4>
                                {<CompletionChart completionPercentage={completionPercentage(partsData)}></CompletionChart>}
                                <br></br>
                                <h4>{completionPercentage(partsData)} %</h4>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="row">
                        {<DeleteButton delete={deleteProject}></DeleteButton>}
                    </div>
                <div>
                </div>
            </main>
        </div>
        </div>
    );
}

export default Dashboard;
