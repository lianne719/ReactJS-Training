import React from 'react';
import Axios from 'axios';

import {Services} from '../../Config/ServiceEndpoints'

import classes from './LoginPage.module.css';

class LoginPage extends React.Component {
    state = {
        username: "",
        password: "",
        isUsernameValid: true
    }
    
    onSubmitClick = (e) => {
        e.preventDefault();
        const data = {
            username: this.usernameRef.current.value,
            password: this.passwordRef.current.value
        };
        Axios.post(Services.LOGIN_POST, data)
        .then(response => {
            alert("Login Successful")
        })
        .catch(err => {
            alert("Login Failed");
        });
    }

    onUsernameValueChange = (e) => {
        e.preventDefault();

    }

    onPasswordValueChange = (e) => {
        e.preventDefault();

    }
    
    render() {
        return (
            <div className={classes.Content}>
                <h1>Login</h1>
                <form onSubmit={this.onSubmitClick}>
                    <input onInput={this.onUsernameValueChange} type="text" placeholder="Username" name="username"/>
                    <input onInput={this.onPasswordValueChange} type="password" placeholder="Password" name="password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

export default LoginPage;