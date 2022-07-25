import React, { ChangeEvent, useEffect, useState } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth-service';
import UserModel from '../models/User';

function Login()
{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // alias for useNavigate

    useEffect(()=>{
        document.title = "Login";
    });

    function onChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }

    function handleLogin(event: any)
    {
        event.preventDefault();

        // Instantiate an object of type User Model
        const UserData: UserModel = {
            username: username,
            password: password,
            FirstName: '',
            LastName: '',
            EmailAddress: ''
        }

        // use the auth service to perform login
        AuthService.login(UserData.username, UserData.password)
        .then(() => {
            // navigate to the movie-list page
            //TODO: Change this link to "movie-list";
            navigate("/home"); // temporarily link to home page 
        }, error =>{
            // TODO: Needs a replacement for Flash messaging
            window.location.reload();
        });
    }


    return(
        <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-6 col-sm-12">
                <div className="login" id="contentArea">
                    <h1 className="display-4">Login</h1>
                    
                    <form onSubmit = { handleLogin } id="loginForm">
                        <div className="form-group mb-2">
                        <div className="input-group">
                            <span className="input-group-addon">
                            <i className="fa fa-user">
                            </i>
                            </span>
                            <input type="text" className="form-control" id="username" name="username"  required
                            value = { username }
                            onChange = { onChangeUsername } 
                            placeholder="Enter your username"/>
                        </div>
                        </div>

                        <div className="form-group mb-2">
                        <div className="input-group">
                            <span className="input-group-addon">
                            <i className="fa fa-lock">
                            </i>
                            </span>
                            <input type="password" className="form-control" id="password" name="password"  required
                            value = { password }
                            onChange = { onChangePassword } 
                            placeholder="Enter your password"/>
                        </div>
                        
                        </div>                                        
                        <div className="text-end">
                        <button id="loginButton" type="submit" className="btn btn-primary btn-lg">
                            <i className="fas fa-sign-in-alt"></i> Login</button>
                            <button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button>
                        </div>
                    </form>
                    
                </div>
                <p className="text-center text-muted small">
                    Don't have an account? 
                    <Link to= { "/register" } className="link">Register Here!</Link>
                </p>
            </div>
        </div>
        </div>
    );
}

export default Login;