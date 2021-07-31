import { React, useEffect, useState } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

const EditTaskForm = (props) => {
    const [formFields, setFormFields] = useState({
        description: props.description,
        completed: props.completed
    });

    useEffect(() => {
        setFormFields({
            description: props.description,
            completed: props.completed
        });
    }, [props])

    // console.log({formFields, props})
    // State for modal being open or closed
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onDescriptionChange = (e) => {
        setFormFields({
            ...formFields,
            description: e.target.value
        });
    }

    const onCompletedChange = (e) => {
        setFormFields({
            ...formFields,
            completed: e.target.value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        props.editTask({
            description: formFields.description,
            completed: formFields.completed,
            part: props.part_id
        });

        setModal(false);
    }

        return (
            <div className="col-lg-12 my-3 text-end">
            <Button color="primary" onClick={toggle} className="btn btn-primary">Edit Task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Part</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Task Description" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">Completed</Label>
                                <Input
                                    type="checkbox"
                                    value={formFields.completed}
                                    onChange={onCompletedChange}/>
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success">
                        Save
                        </Input>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }

export default EditTaskForm;
