import { React, useState, useEffect } from "react";
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

const NewTaskForm = (props) => {
    // console.log(props.part_id)
    const [formFields, setFormFields] = useState({
        description: '',
        completed: false,
    });

    useEffect(() => {
        setFormFields({
            description: '',
            completed: false,
        });
    }, [props])

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

        props.createNewTask({
            description: formFields.description,
            completed: formFields.completed,
            part: props.part_id,
        });

        setFormFields({
            description: '',
            completed: false,
        });

        setModal(false);
    }

        return (
            <div>
            <Button color="primary" onClick={toggle} className="btn btn-primary">+ Task</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Task</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Project Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">Completed</Label>
                                <Input
                                    type="checkbox"
                                    value={formFields.completed}
                                    onChange={onCompletedChange} />
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

export default NewTaskForm;
