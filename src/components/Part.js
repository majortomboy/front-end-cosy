import React from "react";

function Part(props) {

    const greenCheck = () => {
        if (props.completed === true) {
            return (<i className="bi bi-check-circle icon-success"></i>)
        }
    }

    return (
        <div className="col">
            <ul className="list-group text-start">
                <li className="list-group-item">
                <div className="d-flex justify-content-between">
                    <div className="p-2">
                    {props.name}
                    </div>
                    <div className="p-2">
                    {/* <input className="me-1 checkbox-round text-end" type="checkbox" checked={props.completed}></input> */}
                    {greenCheck()}
                    </div>
                </div>
                </li>
            </ul>
        </div>
    );
}

export default Part;
