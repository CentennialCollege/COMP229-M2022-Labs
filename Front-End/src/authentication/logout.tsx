import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../services/auth-service';

function Logout()
{
    useEffect(() =>
    {
        document.title = "Logout";
        AuthService.logout();
        window.location.reload();
    })

    return(
        <Navigate to = "/login" />
    );
}

export default Logout;