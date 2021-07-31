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

const EditItemForm = (props) => {
    const [formFields, setFormFields] = useState({
        description: props.description,
        price: props.price,
        link: props.link,
        completed: props.completed,
    });

    useEffect(() => {
        setFormFields({
            description: props.description,
            price: props.price,
            link: props.link,
            completed: props.completed,
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
            completed: e.target.value
        });
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        props.editItem({
            description: formFields.description,
            price: formFields.price,
            link: formFields.link,
            completed: formFields.completed,
            project: props.project_id,
        });

        setModal(false);
    }

        return (
            <div className="col-lg-12 my-3 text-start">
            <Button color="primary" onClick={toggle} className="btn btn-primary">Edit Item</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Item</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="description">Name</Label>
                                <Input
                                    type="text"
                                    value={formFields.description}
                                    onChange={onDescriptionChange}
                                    placeholder="Enter Item Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="price">Price</Label>
                                <Input
                                    type="number"
                                    value={formFields.price}
                                    onChange={onPriceChange}
                                    placeholder="Enter Item Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="link">Link</Label>
                                <Input
                                    type="url"
                                    value={formFields.link}
                                    onChange={onLinkChange}
                                    placeholder="Enter Item Title" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="completed">Purchased</Label>
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

export default EditItemForm;