import { React, useEffect, useState } from "react";
import axios from "axios";

const ToDoPart = (props) => {

    const greenCheck = () => {
        if (props.completed === true) {
            return (<i className="bi bi-check-circle-fill icon-success"></i>)
        }
        else {
            return (<i></i>)
        }
    }

    return (
        <h5>{greenCheck()} {props.name}</h5>
    );
}

export default ToDoPart;
