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

const NewPhotoForm = (props) => {
    const [formFields, setFormFields] = useState({
        // description: '',
        photo: null,

    });

    useEffect(() => {
        setFormFields({
            // description: '',
            photo: null,

        });
    }, [props])

    // State for modal being open or closed
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    // const onDescriptionChange = (e) => {
    //     setFormFields({
    //         ...formFields,
    //         description: e.target.value
    //     });
    // }

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
            // form_data.append('description', formFields.description);
            form_data.append('project', props.project_id);
        }
        else if (formFields.photo !== null) {
            form_data.append('photo', formFields.photo, formFields.photo.name);
            // form_data.append('description', formFields.description);
            form_data.append('project', props.project_id);
        }
        let url = `${process.env.REACT_APP_BACKEND_URL}/references/`;
        axios.post(url, form_data, {
        headers: {
            'content-type': 'multipart/form-data'
        }
        })
            .then(response => {
            console.log(response.data);
            const newPhotoData = response.data
            const newData = [...props.photoListData]

            newData.push(newPhotoData)
            console.log(newData);

            props.setPhotoListData(newData)
            })
            .catch(err => console.log(err))

        setFormFields({
            // description: '',
            photo: null,
        });

        setModal(false);
    };

        return (
            <div className="col-lg-9 text-end">
            <Button id="" onClick={toggle} className="btn text-white">+ Photo</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Photo</ModalHeader>
                <ModalBody>
                    <Form id="form-font" onSubmit={handleSubmit} className="text-start">
                        {/* <FormGroup className="my-2">
                            <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Photo Description" />
                        </FormGroup> */}
                        <FormGroup className="my-2">
                            <Label for="photo">Photo</Label>
                                <Input
                                    type="file"
                                    accept="image/png, image/jpeg"
                                    onChange={onPhotoChange}
                                    />
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success">
                        Submit
                        </Input>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }

export default NewPhotoForm;
