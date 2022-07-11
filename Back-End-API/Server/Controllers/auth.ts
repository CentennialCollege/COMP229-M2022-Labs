import express from 'express';

// need passport functionality
import passport from 'passport';

// need to include the User model for authentication functions
import User from '../Models/user';

// need to import the JWT Utility Function
import { GenerateToken } from '../Util';

// Processing Functions
export function ProcessLoginPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
   passport.authenticate('local', function(err, user, info)
   {
    // are there server errors?
    if(err)
    {
        console.error(err);
        res.end(err);
    }

    // are there login errors?
    if(!user)
    {
        return res.json({success: false, msg: 'ERROR: Authentication Failed'});
    }

    // no problems - we have a good username and password
    req.logIn(user, function(err)
    {
        // are there db errors?
        if(err)
        {
            console.error(err);
            res.end(err);
        }

       const authToken = GenerateToken(user);

       return res.json({success: true, msg: 'User Logged In Successfully!', user: {
        id: user._id,
        DisplayName: user.DisplayName,
        username: user.username,
        EmailAddress: user.EmailAddress
       }, token: authToken});
    });

    return;
   })(req, res, next);
}
 
export function ProcessRegisterPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    // instantiate a new user object
    let newUser = new User
    ({
        username: req.body.username,
        EmailAddress: req.body.emailAddress,
        DisplayName: req.body.firstName + " " + req.body.lastName
    });

    User.register(newUser, req.body.password, function(err)
    {
        if(err)
        {
            if(err.name == "UserExistsError")
            {
                console.error('ERROR: User Already Exists!');
                req.flash('registerMessage', 'Registration Error!');
            }
            else
            {
                console.error(err.name); // other error
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/register');
        }

        // everything is ok - user has been registered

        // automatically login the user
        return passport.authenticate('local')(req, res, function()
        {
            return res.redirect('/movie-list');
        });
    });
}

export function ProcessLogoutPage(req: express.Request, res: express.Response, next: express.NextFunction)
{
    req.logOut(function(err)
    {
        if(err)
        {
            console.error(err);
            res.end(err);
        }

        console.log("User Logged Out");
    });

    res.redirect('/login');
}


