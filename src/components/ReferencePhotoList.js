import { React, useEffect, useState } from "react";
import axios from "axios";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';
import { useParams, Link, NavLink } from "react-router-dom";
import SideNavigation from "./SideNavigation";
import Photo from "./Photo";
import NewPhotoForm from "./NewPhotoForm";

function ReferencePhotoList() {

    let { id } = useParams();

    const [photoListData, setPhotoListData] = useState([]);

    useEffect (() => {
        const getPhotos = () => {
            axios.get(`${process.env.REACT_APP_BACKEND_URL}/projects/${id}/references/`)
                .then((response) => {
                    console.log(response.data);
                    const newPhotoData = response.data;
                    setPhotoListData(newPhotoData);
                })
                .catch((error) => {
                    console.log(`${error.response.data}`)
                    alert("Could not retrieve data.");
                });
    }
    getPhotos();
}, [id]);

    // useEffect(() => {
    //     getItems();
    // }, [toBuyListData])

    const createNewPhoto = (photo) => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/references/`, photo)
            .then((response) => {
                console.log(response.data);
                const newPhotoData = response.data
                const newData = [...photoListData]

                newData.push(newPhotoData)

                setPhotoListData(newData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to create new item.");
            });
    }

    const photoListElements = photoListData.map((photo) => {
        return (<Photo photo_id={photo.id} description={photo.description} photo={photo.photo} project_id={id} photoListData={photoListData} setPhotoListData={setPhotoListData}/>)
    });

    return (
        <div className="container-fluid">
            <div className="row">
                <SideNavigation id={id}/>
                <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
                    <div className="mt-0 d-flex justify-space-between align-items-center">
                        <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li class="breadcrumb-item"><Link className="link-secondary" to={`/dashboard/${id}/`}>Dashboard</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Reference Photos</li>
                            </ol>
                        </nav>
                        {<NewPhotoForm createNewPhoto={createNewPhoto} project_id={id} photoListData={photoListData} setPhotoListData={setPhotoListData}></NewPhotoForm>}
                    </div>
                    <div className="row my-5 mx-5">
                        <div className="card-group">
                            {photoListElements}
                        </div>
                    </div>
                    {/* <div className="row">
                        <div className="col-lg-10 mt-3">
                        {photoListElements}
                        </div>
                    </div> */}
                </main>
            </div>
        </div>
    )
};

export default ReferencePhotoList;
