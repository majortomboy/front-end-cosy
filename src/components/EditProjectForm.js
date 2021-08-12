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
import axios from "axios";

const EditProjectForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: props.title,
        series: props.series,
        due_date: props.due_date,
        budget: props.budget,
        completed: props.completed,
        photo: null,
    });

    useEffect(() => {
        setFormFields({
            title: props.title,
            series: props.series,
            due_date: props.due_date,
            budget: props.budget,
            completed: props.completed,
            photo: null,
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
            completed: e.target.checked
        });
    }

    const onPhotoChange = (e) => {
        setFormFields({
            ...formFields,
            photo: e.target.files[0]
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        let form_data = new FormData();
        // Add if statement to see if photo was entered into the form
        if (formFields.photo === null) {
            form_data.append('title', formFields.title);
            form_data.append('due_date', formFields.due_date);
            form_data.append('series', formFields.series);
            form_data.append('budget', formFields.budget);
            form_data.append('owner', localStorage.getItem('id'));
        }
        else if (formFields.photo !== null) {
            form_data.append('photo', formFields.photo, formFields.photo.name);
            form_data.append('title', formFields.title);
            form_data.append('due_date', formFields.due_date);
            form_data.append('series', formFields.series);
            form_data.append('budget', formFields.budget);
            form_data.append('owner', localStorage.getItem('id'));
        }
        let url = `${process.env.REACT_APP_BACKEND_URL}/projects/${props.project_id}/`;
        axios.put(url, form_data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
        })
        .then((response) => {
            console.log(response.data);
            const newDashboardData = response.data;

            props.setDashboardData(newDashboardData)
        })
        .catch((error) => {
            console.log(error);
            alert("Unable to edit project.");
        });

        setFormFields({
            title: props.title,
            series: props.series,
            due_date: props.due_date,
            budget: props.budget,
            completed: props.completed,
            photo: null,
        });

        setModal(false);
    };

    // const onFormSubmit = (e) => {
    //     e.preventDefault();

    //     props.editProject({
    //         title: formFields.title,
    //         series: formFields.series,
    //         due_date: formFields.due_date,
    //         budget: formFields.budget,
    //         completed: formFields.completed,
    //         photo: formFields.photo,
    //     });

    //     setModal(false);
    // }

        return (
            <div className="col-lg-4 offset-lg-9 mb-3">
            <Button id="secondary-button" onClick={toggle} className="btn btn-secondary text-white">Edit</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Project</ModalHeader>
                <ModalBody>
                    <Form id="form-font" onSubmit={handleSubmit} className="text-start">
                        <FormGroup className="my-2">
                            <Label for="title">Title</Label>
                                <Input
                                    type="text"
                                    value={formFields.title}
                                    onChange={onTitleChange}
                                    placeholder="Enter Project Title" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="series">Series</Label>
                                <Input
                                    type="text"
                                    value={formFields.series}
                                    onChange={onSeriesChange}
                                    placeholder="Enter Project Series" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="due_date">Due Date</Label>
                                <Input
                                    type="date"
                                    value={formFields.due_date}
                                    onChange={onDueDateChange}
                                    placeholder="Enter Project Due Date" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="budget">Budget</Label>
                                <Input
                                    type="number"
                                    value={formFields.budget}
                                    onChange={onBudgetChange}
                                    placeholder="Enter Project Budget" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="completed">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="photo">Photo</Label>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    // value={formFields.photo}
                                    onChange={onPhotoChange} />
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success mt-2">
                        Save
                        </Input>
                        <FormGroup className="d-flex justify-content-end">
                            <Button className="btn btn-danger mt-4 justify-content-end" onClick={props.deleteProject}><i className="bi bi-trash" aria-hidden="true"></i></Button>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }

export default EditProjectForm;
