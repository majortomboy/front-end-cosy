import { React } from "react";

function Task(props) {

    return (
        <li className="list-group-item">
            <input className="form-check-input me-1" type="checkbox" value=""></input>
            {props.description}
        </li>
    )
}

export default Task;
