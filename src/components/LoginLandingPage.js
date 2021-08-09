
import React, { Component } from 'react';
// import './App.css';
import LoginNav from "./LoginNav";
import { Redirect, Route } from "react-router-dom";
import ProjectList from './ProjectList';

// const base_url = window.process.env.REACT_APP_BACKEND_URL // Is this formatted correctly?
class LoginLandingPage extends Component {
	constructor(props) {
		super(props)

		this.state = {
			logged_in : localStorage.getItem('token') ? true : false,
			username : '',
			displayed_form : ''
		}
	}

	componentDidMount(){
		if(this.state.logged_in){
			fetch(`${process.env.REACT_APP_BACKEND_URL}/current_user/`, {
				method : 'GET',
				headers : {
					Authorization : `JWT ${localStorage.getItem('token')}`
				}
			})
			.then(res => res.json())
			.then(resp => {
				this.setState({ username : resp.username })
			})
			.catch(err => console.log(err));
		}
	}

	display_form = (formName) => {
        this.setState({
            displayed_form : formName
        });
    }

	handleLoginChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
	}

	handleLogout = () => {
		localStorage.removeItem('token');
		this.setState({logged_in : false, username : ''})
	}

	handleLogin = (e, data) => {
		e.preventDefault();
		console.log(data)
		fetch(`${process.env.REACT_APP_BACKEND_URL}/token-auth/`, {
			crossDomain : true,
			withCredentials : true,
			async : true,
			method : 'POST',
			headers : {
				'Content-Type' : 'application/json',
			},
			body : JSON.stringify(data)
		})
		.then(response => response.json())
		.then(json => {
			localStorage.setItem('token', json.token);
			this.setState({
				logged_in : true,
				username : json.user.username
			})
		})
		.catch(error => {
			console.log(error)
		})
		this.setState({
			displayed_form : ''
		})
	}
	render() {
		const { logged_in, username, displayed_form } = this.state;
		return (
			<div>
				<LoginNav
				logged_in = {logged_in}
				handleLogin = {this.handleLogin}
				handleLoginChange = {this.handleLoginChange}
				handleLogout = {this.handleLogout}
				username = {username}
				displayed_form = {displayed_form}
				display_form = {this.display_form}
				/>
				<h3>{
					this.state.logged_in
					? <Route path="/projects" exact component={() => <ProjectList />} />
					: 'Please log in'
				}</h3>
			</div>
		)
	}
}

export default LoginLandingPage;
