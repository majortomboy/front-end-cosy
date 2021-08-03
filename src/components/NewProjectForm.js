import { React, useState, useEffect } from "react";
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

const NewProjectForm = (props) => {
    const [formFields, setFormFields] = useState({
        title: '',
        series: '',
        due_date: '',
        budget: '',
        complted: false,
        photo: null,

    });

    useEffect(() => {
        setFormFields({
            title: '',
            series: '',
            due_date: '',
            budget: '',
            complted: false,
            photo: null,

        });
    }, [props])

    // State for modal being open or closed
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // let photo_url = `media/uploads/${formFields.photo}`

    // const handleChange = (e) => {
    //     this.setState({
    //     [e.target.id]: e.target.value
    //     })
    // };

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
        form_data.append('photo', formFields.photo, formFields.photo.name);
        form_data.append('title', formFields.title);
        form_data.append('due_date', formFields.due_date);
        form_data.append('series', formFields.series);
        form_data.append('budget', formFields.budget);
        let url = 'http://localhost:8000/projects/';
        axios.post(url, form_data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
        })
            .then(res => {
            console.log(res.data);
            })
            .catch(err => console.log(err))

        setFormFields({
            title: '',
            series: '',
            due_date: '',
            budget: '',
            completed: false,
            photo: null,
        });

        setModal(false);
    };

    // const onFormSubmit = (e) => {
    //     e.preventDefault();

    //     props.createNewProject({
    //         title: formFields.title,
    //         series: formFields.series,
    //         due_date: formFields.due_date,
    //         budget: formFields.budget,
    //         completed: formFields.completed,
    //         photo: formFields.photo
    //     });

    //     setFormFields({
    //         title: '',
    //         series: '',
    //         due_date: '',
    //         budget: '',
    //         completed: false,
    //         photo: '',
    //     });

    //     setModal(false);
    // }

        return (
            <div className="col-lg-12 mt-5 text-end">
            <Button color="secondary" onClick={toggle} className="btn btn-secondary text-dark fw-bold">+ Project</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Project</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit} className="text-start">
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
                                    name="completed"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="photo">Photo</Label>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={onPhotoChange}
                                    required/>
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

export default NewProjectForm;
