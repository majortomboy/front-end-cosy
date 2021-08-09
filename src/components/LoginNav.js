import { React, Component, useState, useEffect } from "react";
import RegisterUser from "./RegisterUser";
import LoginUser from "./LoginUser";

class LoginNav extends Component {

    render(){
        let form;
        switch(this.props.displayed_form){
            case 'login' :
                form = <LoginUser
                        handleLoginChange={this.props.handleLoginChange}
                        handleLogin={this.props.handleLogin}
                        username={this.props.username}/>;
                break;
            case 'signup' :
                form = <RegisterUser />
                break;
            default:
                form = null;
            }
        const logged_in_nav = (
            <ul>
                <li onClick = {() => this.props.display_form('login')}>Login</li>
                <li onClick = {() => this.props.display_form('signup')}>Signup</li>
            </ul>
        );
        const logged_out_nav = (
            <ul>
                <li onClick={this.props.handleLogout}>Logout</li>
            </ul>
        );
        return (
            <div>
                {this.props.logged_in? logged_out_nav : logged_in_nav}
                {form}
            </div>
        );
    }
}
export default LoginNav
