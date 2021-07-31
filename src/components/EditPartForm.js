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

    const onFormSubmit = (e) => {
        e.preventDefault();

        props.editPart({
            name: formFields.name,
            project: props.project
        });

        setModal(false);
    }

        return (
            <div className="col-lg-12 my-3 text-end">
            <Button color="primary" onClick={toggle} className="btn btn-primary">Edit Part</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Edit Part</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="title">Name</Label>
                                <Input
                                    type="text"
                                    value={formFields.name}
                                    onChange={onNameChange}
                                    placeholder="Enter Project Title" />
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

export default EditPartForm;
