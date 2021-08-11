import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory, Link } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";

export default function Register() {
    const history = useHistory();
    const initialFormData = Object.freeze({
        email: '',
        username: '',
        password: '',
    });

    const [formData, updateFormData] = useState(initialFormData);

    // const handleChange = (e) => {
    //     updateFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value.trim(),
    //     });
    // };

    const onEmailChange = (e) => {
        updateFormData({
            ...formData,
            email: e.target.value
        });
    }

    const onUsernameChange = (e) => {
        updateFormData({
            ...formData,
            username: e.target.value
        });
    }

    const onPasswordChange = (e) => {
        updateFormData({
            ...formData,
            password: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        axiosInstance
            .post(`user/register/`, {
                email: formData.email,
                username: formData.username,
                password: formData.password,
            })
            .then((response) => {
                history.push('/login');
                console.log(response);
                console.log(response.data);
            });
    };

    return (
        <div className="row d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card my-5">
                    <div className="card-body p-5">
                        <h2>Create an account</h2>
                        <Form className="text-start">
                        <FormGroup className="mt-3 d-flex align-items-center">
                            <Label className="me-2" for="email"><i class="bi bi-envelope-fill"></i></Label>
                                <Input
                                    type="text"
                                    value={formData.email}
                                    onChange={onEmailChange}
                                    placeholder="Enter email" />
                        </FormGroup>
                        <FormGroup className="my-3 d-flex align-items-center">
                            <Label className="me-2" for="username"><i className="bi bi-person-fill"></i></Label>
                                <Input
                                    type="text"
                                    value={formData.username}
                                    onChange={onUsernameChange}
                                    placeholder="Enter username" />
                        </FormGroup>
                        <FormGroup className="my-3 d-flex align-items-center">
                            <Label className="me-2" for="password"><i class="bi bi-lock-fill"></i></Label>
                                <Input
                                    type="text"
                                    value={formData.password}
                                    onChange={onPasswordChange}
                                    placeholder="Enter password" />
                        </FormGroup>
                        <Button type="submit" className="btn btn-success mt-3 ms-4" onClick={handleSubmit}>
                            Sign Up
                        </Button>
                        <p className="text-start text-muted mt-5 mb-0">Already have an account? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    )
}
