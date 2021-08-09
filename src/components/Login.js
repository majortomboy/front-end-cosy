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

export default function Login() {
    const history = useHistory();
    const initialFormData = Object.freeze({
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
            .post(`token/`, {
                username: formData.username,
                password: formData.password,
            })
            .then((response) => {
                localStorage.setItem('access_token', response.data.access);
                localStorage.setItem('refresh_token', response.data.refresh);
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('id', response.data.id);
                axiosInstance.defaults.headers['Authorization'] = 'JWT ' + localStorage.getItem('access_token');
                history.push('/projects');
                console.log(response);
                console.log(response.data);
                console.log(response.data.username);
                console.log(response.data.id);

                // const tokenParts = response.data.access.split('.');
                // const encodedPayload = tokenParts[1];
                // const rawPayload = atob(encodedPayload);
                // const user = JSON.parse(rawPayload);
                // console.log(user.username);
                // console.log(formData.username)
            });
    };

    return (
        <Form className="text-start col-lg-5">
            Login
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
            Login
        </Button>
    </Form>
    )
}
