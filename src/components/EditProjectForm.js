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

const EditProjectForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: props.title,
        series: props.series,
        due_date: props.due_date,
        budget: props.budget,
        completed: props.completed,
        photo: props.photo,

    });

    useEffect(() => {
        setFormFields({
            title: props.title,
            series: props.series,
            due_date: props.due_date,
            budget: props.budget,
            completed: props.completed,
            photo: props.photo,
        });
    }, [props])

    console.log({formFields, props})
    // State for modal being open or closed
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const onTitleChange = (e) => {
        setFormFields({
            ...formFields,
            title: e.target.value
        });
    }

    const onSeriesChange = (e) => {
        setFormFields({
            ...formFields,
            series: e.target.value
        });
    }

    const onDueDateChange = (e) => {
        setFormFields({
            ...formFields,
            due_date: e.target.value
        });
    }

    const onBudgetChange = (e) => {
        setFormFields({
            ...formFields,
            budget: e.target.value
        });
    }

    const onCompletedChange = (e) => {
        setFormFields({
            ...formFields,
            completed: e.target.value
        });
    }

    const onPhotoChange = (e) => {
        setFormFields({
            ...formFields,
            photo: e.target.value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        props.editProject({
            title: formFields.title,
            series: formFields.series,
            due_date: formFields.due_date,
            budget: formFields.budget,
            completed: formFields.completed,
            photo: formFields.photo,
        });

        setModal(false);
    }

        return (
            <div className="col-lg-12 my-3 text-end">
            <Button color="primary" onClick={toggle} className="btn btn-primary">Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Project</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    value={formFields.title}
                                    onChange={onTitleChange}
                                    placeholder="Enter Project Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="series">Series</Label>
                                <Input
                                    type="text"
                                    value={formFields.series}
                                    onChange={onSeriesChange}
                                    placeholder="Enter Project Series" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="due_date">Due Date</Label>
                                <Input
                                    type="date"
                                    value={formFields.due_date}
                                    onChange={onDueDateChange}
                                    placeholder="Enter Project Due Date" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="budget">Budget</Label>
                                <Input
                                    type="number"
                                    value={formFields.budget}
                                    onChange={onBudgetChange}
                                    placeholder="Enter Project Budget" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="photo">Photo</Label>
                                <Input
                                    type="file"
                                    value={formFields.photo}
                                    onChange={onPhotoChange} />
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

export default EditProjectForm;
