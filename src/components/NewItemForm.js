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

const NewItemForm = (props) => {
    // console.log(props.part_id)
    const [formFields, setFormFields] = useState({
        description: '',
        price: '',
        link: '',
        completed: false,
    });

    useEffect(() => {
        setFormFields({
            description: '',
            price: '',
            link: '',
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

    const onPriceChange = (e) => {
        setFormFields({
            ...formFields,
            price: e.target.value
        });
    }

    const onLinkChange = (e) => {
        setFormFields({
            ...formFields,
            link: e.target.value
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

        props.createNewItem({
            description: formFields.description,
            price: formFields.price,
            link: formFields.link,
            completed: formFields.completed,
            project: props.project_id,
        });

        setFormFields({
            description: '',
            price: '',
            link: '',
            completed: false,
        });

        setModal(false);
    }

        return (
            <div className="col-lg-10 text-end">
            <Button color="secondary" onClick={toggle} className="btn btn-secondary text-white">+ Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Item</ModalHeader>
                <ModalBody>
                    <Form id="form-font" onSubmit={onFormSubmit} className="text-start">
                        <FormGroup className="my-2">
                            <Label for="description">Description</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Item Description" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="price">Price</Label>
                                <Input
                                    type="number"
                                    value={formFields.price}
                                    onChange={onPriceChange}
                                    placeholder="Enter Item Price" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="link">Link</Label>
                                <Input
                                    type="url"
                                    value={formFields.link}
                                    onChange={onLinkChange}
                                    placeholder="Enter Item Link" />
                        </FormGroup>
                        <FormGroup className="my-2">
                            <Label for="completed" className="me-2">Completed</Label>
                                <Input
                                    type="checkbox"
                                    checked={formFields.completed}
                                    onChange={onCompletedChange} />
                        </FormGroup>
                        <Input type="Submit" className="btn btn-success my-2">
                        Save
                        </Input>
                    </Form>
                </ModalBody>
            </Modal>
            </div>
        );
    }

export default NewItemForm;
