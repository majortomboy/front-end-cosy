import React from "react";

function Part(props) {

    return (
        <div className="col">
            <ul className="list-group text-start">
                <li className="list-group-item">
                    <input className="form-check-input me-1 checkbox-circle" type="checkbox" checked={props.completed}></input>
                    {props.name}
                </li>
            </ul>
        </div>
    );
}

export default Part;
