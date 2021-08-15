import { React, useEffect, useState } from "react";
import axios from "axios";
import EditPartForm from "./EditPartForm";

const ToDoPart = (props) => {

    const [singlePartData, setSinglePartData] = useState([]);

    useEffect(() => {
        setSinglePartData({
            name: props.name,
            completed: props.completed,
        });
    }, [props])

    // const editPart = (part) => {
    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
    //         .then((response) => {
    //             console.log(response.data);
    //             // console.log(response.data.completed);
    //             const newPartData = response.data;
    //             // const newPartCompletedData = response.data.completed;

    //             props.setPartData(newPartData)
    //             // props.setPartCompletedData(newPartCompletedData)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to edit part.");
    //         });
    // }

    // const deletePart = (part) => {
    //     axios.delete(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
    //         .then((response) => {
    //             const newPartData = props.partData.filter((existingPart) => {
    //                 return existingPart.id !== props.part_id
    //             });

    //             props.setPartData(newPartData)
    //             // console.log(response.data);
    //             // alert("Part deleted.");
    //             // window.location.reload(true);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to delete part.");
    //         })
    // }


    // axios.delete(`${process.env.REACT_APP_BACKEND_URL}/tobuyitems/${props.part_id}/`, item)
    // .then((response) => {
    //     const newItemData = props.toBuyListData.filter((existingItem) => {
    //         return existingItem.id !== props.item_id
    //     });
    //     // props.setToBuyListData(newItemData)

    //     console.log(response.data);
    //     // alert("Item deleted.");
    //     props.setToBuyListData(newItemData)

    // })
    // .catch((error) => {
    //     console.log(error);
    //     alert("Unable to delete item.");
    // })

    const greenCheck = () => {
        if (props.completed === true) {
            return (<i className="bi bi-check-circle-fill icon-success"></i>)
        }
        else {
            return (<i></i>)
        }
    }

    return (
        // <h5>{greenCheck()} {props.name} {<EditPartForm part_id={props.part_id} name={props.name} project={props.project} completed={props.completed}></EditPartForm>}</h5>
        <h5>{greenCheck()}{props.name}</h5>
    );
}

export default ToDoPart;
