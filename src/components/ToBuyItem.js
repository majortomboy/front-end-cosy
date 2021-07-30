import { React, useEffect, useState } from "react";
import axios from "axios";
import ToBuyList from "./ToBuyList";
// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';

function ToBuyItem(props) {

    return (
        <tr>
            <th scope="row">{props.item_id}</th>
            <td>
                <input type="checkbox" value={props.completed}></input>
            </td>
            <td>{props.description}</td>
            <td>${props.price}</td>
            <td><a href={props.link} target="_blank" rel="noreferrer noopener">{props.link}</a></td>
        </tr>
    )
}

export default ToBuyItem;
