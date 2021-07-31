import { React, useEffect, useState } from "react";
import axios from "axios";
import ToBuyList from "./ToBuyList";
import EditItemForm from "./EditItemForm";

// import {
//     BrowserRouter as Router,
//     withRouter
// } from 'react-router-dom';

function ToBuyItem(props) {

    const [itemData, setItemData] = useState([]);

    useEffect(() => {
        setItemData({
            description: props.description,
            price: props.price,
            link: props.link,
            completed: props.completed,
        });
    }, [props])

    const editItem = (item) => {
        axios.put(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/${props.item_id}/`, item)
            .then((response) => {
                console.log(response.data);
                const newItemData = response.data;

                setItemData(newItemData)
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to edit item.");
            });
    }

    const deleteItem = (item) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/${props.item_id}/`, item)
            .then((response) => {
                console.log(response.data);
                alert("Item deleted.");
            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete item.");
            })
    }

    return (
        <tr>
            <td>
                <input type="checkbox" value={itemData.completed}></input>
            </td>
            <td>{itemData.description}</td>
            <td>${itemData.price}</td>
            <td><a href={itemData.link} target="_blank" rel="noreferrer noopener">{itemData.link}</a></td>
            <td>{<EditItemForm description={itemData.description} price={itemData.price} link={itemData.link} completed={itemData.completed} project_id={props.project_id} editItem={editItem}></EditItemForm>}</td>
            <td><button className="btn btn-danger" onClick={deleteItem}>Delete Item</button></td>
        </tr>
    )
}

export default ToBuyItem;
