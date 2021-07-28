import { React } from "react";

function Task(props) {
    return (
        <div>
            <ul className="list-group text-start">
                <li className="list-group-item">
                    <input className="form-check-input me-1" type="checkbox" value=""></input>
                    {props.description}
                </li>
            </ul>
        </div>
    )
}

export default Task;
