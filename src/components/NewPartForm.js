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

const NewPartForm = (props) => {
    const [formFields, setFormFields] = useState({
        name: '',
    });

    useEffect(() => {
        setFormFields({
            name: '',
        });
    }, [props])

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

        props.createNewPart({
            name: formFields.name,
            project: props.project_id,
        });

        setFormFields({
            name: '',
        });

        setModal(false);
    }

        return (
            <div className="col-lg-10 text-end">
            <Button color="secondary" onClick={toggle} className="btn btn-secondar text-white">+ Part</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>New Part</ModalHeader>
                <ModalBody>
                    <Form onSubmit={onFormSubmit} className="text-start">
                        <FormGroup>
                            <Label for="name">Name</Label>
                                <Input
                                    type="text"
                                    value={formFields.name}
                                    onChange={onNameChange}
                                    placeholder="Enter Part Name" />
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

export default NewPartForm;
