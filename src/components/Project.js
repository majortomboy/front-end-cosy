import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

function Project(props) {

    return (
        <div className="col-lg-4">
            <Link className="navbar-brand" to={`/dashboard/${props.project_id}`}>
                <div className="card">
                    <img src="https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=webp&v=1530129081" alt="placeholder" className="card-img-top"></img>
                    <div className="card-body">
                        <p className="card-text fw-bold">{props.title}</p>
                        <p className="card-text fst-italic">{props.series}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
    }

export default Project;
