import { React, useEffect, useState } from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import { Modal, ModalBody } from "reactstrap";

function Photo(props) {

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const deletePhoto = (photo) => {
        console.log(photo)
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/references/${props.photo_id}/`, photo)
            .then((response) => {
                const newPhotoData = props.photoListData.filter((existingPhoto) => {
                    return existingPhoto.id !== props.photo_id
                });

                console.log(response.data);
                props.setPhotoListData(newPhotoData)

            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete photo.");
            })
    }

    return (
        <div className="col-lg-4 my-3">
                <div className="card project-card rounded mx-3">
                        <img id="card-img-ref" className="image-fluid" src={props.photo} alt="reference" onClick={toggle}/>
                        <div className="hover-btn">
                            <button type="button" className="btn btn-danger mt-3" onClick={deletePhoto}>
                            <i className="bi bi-trash" aria-hidden="true"></i>
                            </button>
                            <Modal isOpen={modal} toggle={toggle}>
                                <img src={props.photo} alt="fullsize reference" />
                            </Modal>
                        </div>
                </div>
        </div>
    );
}

export default Photo;
