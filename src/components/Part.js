import React from "react";

function Part(props) {

    return (
            <ul className="list-group text-start">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value=""></input>
                    {props.name}
                </li>
            </ul>
    );
}

export default Part;