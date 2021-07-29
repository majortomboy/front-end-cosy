import { React, useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Part from "./Part"
import SideNavigation from "./SideNavigation";

function Dashboard() {

    let { id } = useParams();

    const [dashboardData, setDashboardData] = useState([]);
    const [partsData, setPartsData] = useState([]);

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

    const getParts = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/parts`)
            .then((response) => {
                console.log(response.data)
                // const newPartsData = partsData.filter((part) => {
                //     return part.project === id;
                // });

                // I only want it to display the parts associated with the same project id (response.data.project?)
                const newPartsData = response.data
                setPartsData(newPartsData);
                // console.log(partsData);
                })
            .catch((error) => {
                console.log("Error:", error);
            });
    };

    useEffect(() => {
        getParts();

    }, [])

    const displayParts = partsData.map((part) => {
        return (<Part part_id={part.id} name={part.name} project={part.project}/>)
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                <h1 className="h2 flex-column">Project Dashboard - {dashboardData.title}</h1>
                <div className="row border border-primary">
                    <div className="col">
                        <img className="rounded border border-primary h-50" src={dashboardData.photo} alt="placeholder"/>
                        <div className="row">
                            <div className="row border border-warning">
                                <h4>Parts</h4>
                                {displayParts}
                            </div>
                        </div>
                    </div>
                    <div className="col border border-secondary">
                        <div className="row border border-primary text-start">
                            <h4>{dashboardData.title}</h4>
                            <p className=" fst-italic">{dashboardData.series}</p>
                            <p className="fw-bold">Due Date: {dashboardData.due_date}</p>
                        </div>
                        <div className="row my-5 border border-danger">
                            <div className="col mx-3">
                                <div className="card">
                                <h4 className="card-header">Budget</h4>
                                    <p>${dashboardData.budget}</p>
                                </div>
                            </div>
                            <div className="col mx-3">
                                <div className="card">
                                <h4 className="card-header">Completion Status</h4>
                                <p>0 %</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </main>
        </div>
        </div>
    );
}

export default Dashboard;
