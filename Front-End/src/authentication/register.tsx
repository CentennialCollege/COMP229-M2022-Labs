import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth-service';
import UserModel from '../models/User';

function Register()
{
    const [ username, setUsername ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ confirmPassword, setConfirmPassword ] = useState('');
    const [ FirstName, setFirstName ] = useState('');
    const [ LastName, setLastName ] = useState('');
    const [ EmailAddress, setEmailAddress ] = useState('');
    const navigate = useNavigate(); // alias

    useEffect(() => {
        document.title = "Register";
    });

    function onChangeUsername(event: ChangeEvent<HTMLInputElement>)
    {
        setUsername(event.target.value);
    }

    function onChangePassword(event: ChangeEvent<HTMLInputElement>)
    {
        setPassword(event.target.value);
    }

    function onChangeConfirmPassword(event: ChangeEvent<HTMLInputElement>)
    {
        setConfirmPassword(event.target.value);
    }

    function onChangeFirstName(event: ChangeEvent<HTMLInputElement>)
    {
        setFirstName(event.target.value);
    }

    function onChangeLastName(event: ChangeEvent<HTMLInputElement>)
    {
        setLastName(event.target.value);
    }

    function onChangeEmailAddress(event: ChangeEvent<HTMLInputElement>)
    {
        setEmailAddress(event.target.value);
    }

    function handleRegister(event: any)
    {
        event.preventDefault();
        const UserData: UserModel =
        {
            username: username,
            password: password,
            FirstName: FirstName,
            LastName: LastName,
            EmailAddress: EmailAddress
        }

        AuthService.register(UserData.username, UserData.password, UserData.FirstName, UserData.LastName, UserData.EmailAddress)
        .then(() =>{
            navigate('/login');
        }, error =>{
            // TODO: Needs Flash Messaging
            window.location.reload();
        });
    }

    return (
        <div className="container">
        <div className="row">
            <div className="offset-md-3 col-md-6 col-sm-12">
                <div className="login" id="contentArea">
                    <h1 className="display-4">Register</h1>

                    <form onSubmit = { handleRegister } id="registerForm">
                        <p className="hint-text">Create your own account. It's free and only takes a minute.</p>

                        <div className="form-group">
                        <div className="row">
                            <p className="lead"><i className="fas fa-user-shield"></i> Personal Information</p>
                            <div className="col-md-6">
                            <input className="form-control" type="text" name="firstName" id="firstName" placeholder="First Name" 
                            value= { FirstName }
                            onChange = { onChangeFirstName }
                            required/>
                            </div>
                            <div className="col-md-6">
                            <input className="form-control" type="text" name="lastName" id="lastName" placeholder="Last Name" 
                            value = { LastName }
                            onChange = { onChangeLastName }
                            required/>
                            </div>
                        </div>
                        </div>
                        
                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="email" className="form-control" id="emailAddress" name="emailAddress" required
                            value= { EmailAddress }
                            onChange = { onChangeEmailAddress }
                            placeholder="Email"/>
                            </div>
                        </div>
                        </div>

                        <div className="form-group mt-4">
                        <div className="row">
                            <p className="lead"><i className="fas fa-database"></i> System Identification</p>
                            <div className="col-md-12">
                            <input type="text" className="form-control" id="username" name="username"  required
                            value= { username }
                            onChange = { onChangeUsername }
                            placeholder="Username"/>
                            </div>
                        </div>
                        </div>

                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="password" className="form-control" id="password" name="password"  required
                            value= { password }
                            onChange = { onChangePassword }
                            placeholder="Password"/>
                            </div>
                        </div>
                        </div>
                            
                        {/* TODO: Need to Validate that passwords are the same */}    
                        <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                            <input type="password" className="form-control" id="confirmPassword" name="confirmPassword"  required
                            value= { confirmPassword }
                            onChange = { onChangeConfirmPassword }
                            placeholder="Confirm Password"/>
                            </div>
                        </div>
                        </div>
                                                            
                        <div className="text-end mt-2">
                        <button id="submitButton" type="submit" className="btn btn-primary btn-lg">
                            <i className="fas fa-user-plus"></i> Register</button>
                        <button id="cancelButton" type="reset" className="btn btn-warning btn-lg">
                            <i className="fas fa-undo"></i> Cancel</button>
                        </div>
                    </form>
                    
                </div>
                <p className="text-center text-muted small">
                    Already have an account? 
                    <Link to= {"/login"} className="link" >Sign in</Link>
                </p>
            </div>
        </div>
        </div>
    );
}

export default Register;