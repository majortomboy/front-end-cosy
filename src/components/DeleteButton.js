import { React, useEffect, useState } from "react";

const DeleteButton = (props) => {
    return (
        <div className="col-lg-12 my-3 text-end">
            <button className="btn btn-danger" onClick={props.delete}><i className="bi bi-trash" aria-hidden="true"></i></button>
        </div>
    )
}

export default DeleteButton;
