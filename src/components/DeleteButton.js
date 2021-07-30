import { React, useEffect, useState } from "react";

const DeleteButton = (props) => {
    return (
        <div className="col-lg-12 my-3 text-end">
            <button className="btn btn-danger" onClick={props.deleteProject}>Delete</button>
        </div>
    )
}

export default DeleteButton;
