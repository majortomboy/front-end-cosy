import React from "react";
import axios from "axios";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Project(props) {

    const placeholderImage = () => {
        if (props.photo !== null) {
            return (<img src={props.photo} alt="character" className="card-img-top image-fluid"></img>)
        }
        else {
            return (<img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081" alt="placeholder" className="card-img-top image-fluid"></img>)
        }
    }

    return (
        <div className="col-lg-4">
            <Link className="navbar-brand" to={`/dashboard/${props.project_id}`}>
                <div className="card project-card rounded mx-3">
                    {placeholderImage()}
                    <div className="card-body">
                        <p className="card-text fw-bold text-dark">{props.title}</p>
                        <p className="card-text fst-italic text-dark">{props.series}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
}

export default Project;
