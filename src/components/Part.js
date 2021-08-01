import React from "react";
import DeleteButton from "./DeleteButton";

function Part(props) {

    return (
        <div className="col">
            <ul className="list-group text-start">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value=""></input>
                    {props.name}
                </li>
            </ul>
        </div>
    );
}

export default Part;
