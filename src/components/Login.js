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
        <div className="row d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
            <div className="card my-5">
                <div className="card-body p-5">
                    <h2>Sign in to your account</h2>
                    <Form className="text-start">
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
                                    type="password"
                                    value={formData.password}
                                    onChange={onPasswordChange}
                                    placeholder="Enter password" />
                        </FormGroup>
                        <Button type="submit" className="btn btn-success mt-3 ms-4" onClick={handleSubmit}>
                            Sign in
                        </Button>
                        <p className="text-start text-muted mt-3 ms-3 mb-0">Don't have an account? <Link to="/register" className="fw-bold text-body"><u>Sign up</u></Link></p>
                    </Form>
                </div>
            </div>
        </div>
    </div>
    )
}
