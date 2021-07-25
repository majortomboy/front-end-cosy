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
    })

    return (
        <div>
            <h2>Welcome to your project dashboard for {dashboardData.title}!</h2>
            <div>
                <h4>Character: {dashboardData.title}</h4>
                <h4>Series: {dashboardData.series}</h4>
                <h4>Budget: ${dashboardData.budget}</h4>
            </div>
            <Link to="/">
                <button>Back to Projects</button>
            </Link>
        </div>
    );
}

export default Dashboard;
