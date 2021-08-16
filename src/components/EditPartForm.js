import { React, useEffect, useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";
// import axios from "axios";

const EditPartForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: props.name,
        completed: props.completed,
    });

    useEffect(() => {
        setFormFields({
            name: props.name,
            completed: props.completed,
        });
    }, [props])

    // const editPart = (part) => {
    //     axios.put(`${process.env.REACT_APP_BACKEND_URL}/parts/${props.part_id}/`, part)
    //         .then((response) => {
    //             console.log(response.data.name);
    //             console.log(response.data.completed);
    //             const newPartNameData = response.data.name;
    //             const newPartCompletedData = response.data.completed;

    //             props.setPartNameData(newPartNameData)
    //             props.setPartCompletedData(newPartCompletedData)
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             alert("Unable to edit part.");
    //         });
    // }

    // console.log({formFields, props})
    // State for modal being open or closed
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onNameChange = (e) => {
        setFormFields({
            ...formFields,
            name: e.target.value
        });
    }

    const onCompletedChange = (e) => {
        setFormFields({
            ...formFields,
            completed: e.target.checked
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        // const refreshTaskData = [...props.taskData]
        // props.setTaskData(refreshTaskData)

        props.editPart({
            name: formFields.name,
            completed: formFields.completed,
            project: props.project
        });

        setModal(false);
    }

        return (
            <span>
            <Button color="none" onClick={toggle} className="btn button-outline-light"><i class="bi bi-pencil-square"></i></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Part</ModalHeader>
                <ModalBody>
                    <Form id="form-font" onSubmit={onFormSubmit} className="text-start">
                        <FormGroup className="my-2">
                            <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    value={formFields.name}
                                    onChange={onNameChange}
                                    placeholder="Enter Part Title" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="title" className="me-2">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success">
                        Save
                        </Input>
                        <FormGroup className="d-flex justify-content-end">
                        <button className="btn btn-danger mt-4 justify-content-end" onClick={props.deletePart}><i className="bi bi-trash" aria-hidden="true"></i></button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </span>
        );
    }

export default EditPartForm;
