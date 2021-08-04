import { React, useEffect, useState } from "react";
import axios from "axios";
import EditItemForm from "./EditItemForm";

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
        console.log(item)
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/${props.item_id}/`, item)
            .then((response) => {
                const newItemData = props.toBuyListData.filter((existingItem) => {
                    return existingItem.id !== props.item_id
                });
                // props.setToBuyListData(newItemData)

                console.log(response.data);
                // alert("Item deleted.");
                props.setToBuyListData(newItemData)

            })
            .catch((error) => {
                console.log(error);
                alert("Unable to delete item.");
            })
    }

    const changeCheckbox = () => {

        axios.patch(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/${props.item_id}/`, {
            completed: !itemData.completed
        })
        .then((response) => {
            console.log(response.data);
            const newItemData = response.data;

            setItemData(newItemData)
        })
    }

    return (
        <tr className="text-start">
            <td>
                <input className="form-check-input" type="checkbox" checked={itemData.completed} onClick={changeCheckbox}></input>
            </td>
            <td>{itemData.description}</td>
            <td>${itemData.price}</td>
            <td><a className="link-secondary" href={itemData.link} target="_blank" rel="noreferrer noopener">{itemData.link}</a></td>
            <td>{<EditItemForm description={itemData.description} price={itemData.price} link={itemData.link} completed={itemData.completed} project_id={props.project_id} editItem={editItem}></EditItemForm>}</td>
            <td><button color="none" className="btn" onClick={deleteItem}><i className="bi bi-trash" aria-hidden="true"></i></button></td>
        </tr>
    )
}

export default ToBuyItem;
