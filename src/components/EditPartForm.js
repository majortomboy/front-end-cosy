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

const EditPartForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: props.name,
    });

    useEffect(() => {
        setFormFields({
            name: props.name,
        });
    }, [props])

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
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    value={formFields.name}
                                    onChange={onNameChange}
                                    placeholder="Enter Part Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="title">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success">
                        Save
                        </Input>
                        <button className="btn btn-danger" onClick={props.deletePart}><i className="bi bi-trash" aria-hidden="true"></i></button>
                    </Form>
                </ModalBody>
            </Modal>
            </span>
        );
    }

export default EditPartForm;
