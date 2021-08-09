import React, { useState } from 'react';
import axiosInstance from '../axios';
import { useHistory } from 'react-router-dom';
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
        <Form className="col-lg-5 text-start">
            Sign Up
        <FormGroup>
            <Label for="email">Email Address</Label>
                <Input
                    type="text"
                    value={formData.email}
                    onChange={onEmailChange}
                    placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
            <Label for="username">Username</Label>
                <Input
                    type="text"
                    value={formData.username}
                    onChange={onUsernameChange}
                    placeholder="Enter username" />
        </FormGroup>
        <FormGroup>
            <Label for="password">Password</Label>
                <Input
                    type="text"
                    value={formData.password}
                    onChange={onPasswordChange}
                    placeholder="Enter password" />
        </FormGroup>
        <Button type="submit" className="btn btn-success" onClick={handleSubmit}>
            Sign Up
        </Button>
    </Form>
    )
}
