import express from 'express';

// enable jwt
import jwt from 'jsonwebtoken';
import * as DBConfig from '../Config/db';

// convenience function to return the DisplayName of the User
export function UserDisplayName(req: express.Request): string
{
    if(req.user)
    {
        let user = req.user as UserDocument
        return user.DisplayName.toString();
    }
    return '';
}

// helper middleware function for guarding secure locations
export function AuthGuard(req: express.Request, res: express.Response, next: express.NextFunction): void
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

export function GenerateToken(user: UserDocument): string
{
    const payload =
    {
        id: user._id,
        DisplayName: user.DisplayName,
        username: user.username,
        EmailAddress: user.EmailAddress
    }

    const jwtOptions =
    {
        expiresIn: 604800 // 1 week
    }

    return jwt.sign(payload, DBConfig.Secret, jwtOptions);
}