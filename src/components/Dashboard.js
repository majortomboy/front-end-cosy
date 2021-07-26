import { React, useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function Dashboard() {

    let { id } = useParams();

    const [dashboardData, setDashboardData] = useState([]);

    const getDashboardInfo = () => {
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/projects/${id}`)
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

    // How am I supposed to use the dependency array here?

    return (
        <div className="container-fluid">
            <div className="row">
                <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar text-start">
                    <ul class="nav flex-column my-5">
                        <li class="nav-item">
                            <Link class="nav-link active h5" to={`/dashboard/${id}/todo/`}>
                                <span class="ml-2">To Do List</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h5" to={`/dashboard/${id}/tobuy/`}>
                                <span class="ml-2">To Buy List</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h5" to={`/dashboard/${id}/references/`}>
                                <span class="ml-2">Reference Photos</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h5" to={`/dashboard/${id}/resources/`}>
                                <span class="ml-2">Resources</span>
                            </Link>
                        </li>
                        <li class="nav-item">
                            <Link class="nav-link h5" to={`/dashboard/${id}/settings/`}>
                                <span class="ml-2">Settings</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                <h1 className="h2 flex-column">Project Dashboard - {dashboardData.title}</h1>
                <div className="row border border-primary">
                    <div className="col">
                        <img className="rounded border border-primary h-50" src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081" alt="placeholder"/>
                        <div className="row">
                            <div className="row border border-warning">
                                <h4>Parts</h4>
                                <ul className="list-group text-start">
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value=""></input>
                                        First Checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value=""></input>
                                        Second Checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value=""></input>
                                        Third Checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value=""></input>
                                        Fourth Checkbox
                                    </li>
                                    <li className="list-group-item">
                                        <input className="form-check-input me-1" type="checkbox" value=""></input>
                                        Fifth Checkbox
                                    </li>
                                </ul>
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
