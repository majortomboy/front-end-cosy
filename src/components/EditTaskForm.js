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

    // const onCompletedChange = (e) => {
    //     setFormFields({
    //         ...formFields,
    //         completed: e.target.checked
    //     });
    // }

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
            <Button color="none" onClick={toggle} className="btn button-outline-light"><i class="bi bi-pencil-square"></i></Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Part</ModalHeader>
                <ModalBody>
                    <Form id="form-font" onSubmit={onFormSubmit} className="text-start">
                        <FormGroup className="my-2">
                            <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Task Description" />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="completed">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange}/>
                        </FormGroup> */}
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
