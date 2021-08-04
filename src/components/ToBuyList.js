import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import { useParams, Link, NavLink } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import ToBuyItem from "./ToBuyItem";
import NewItemForm from "./NewItemForm";

function ToBuyList() {

    let { id } = useParams();

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

    // useEffect(() => {
    //     getItems();
    // }, [toBuyListData])

    const createNewItem = (newItem) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/`, newItem)
            .then((response) => {
                console.log(response.data);
                const newToBuyListData = response.data
                const newData = [...toBuyListData]

                newData.push(newToBuyListData)

                setToBuyListData(newData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to create new item.");
            });
    }

    const toBuyListElements = toBuyListData.map((item) => {
        return (<ToBuyItem item_id={item.id} description={item.description} price={item.price} link={item.link} completed={item.completed} project_id={id} />)
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

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                {/* <div className="col text-start"> */}
                    <div className="mt-0 d-flex justify-space-between align-items-center">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link className="link-secondary" to={`/dashboard/${id}/`}>Dashboard</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">To Buy List</li>
                            </ol>
                        </nav>
                        {<NewItemForm createNewItem={createNewItem} project_id={id}></NewItemForm>}
                    </div>
                    <div className="row">
                        <div className="col-lg-11 mt-3 text-end">
                        </div>
                    </div>
                <table className="table table-striped table-hover">
                    <thead className="table text-start">
                        <tr>
                            <th scope="col">Purchased</th>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Link</th>
                            <th scope="col">Edit</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {toBuyListElements}
                    </tbody>
                </table>
                {/* </div> */}
                </main>
            </div>
        </div>
    )
};

export default ToBuyList;
