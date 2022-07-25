import http from '../components/http-common';

class AuthService
{
    public login(username: string, password: string)
    {
        return http.post('/login', {username, password})
        .then(response => {
            if(response.data.token)
            {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
    }

    public logout()
    {
        localStorage.removeItem("user");
    }

    public register(username: string, password: string, firstName: string, lastName: string, emailAddress: string)
    {
        return http.post('register', { username, password, firstName, lastName, emailAddress });
    }

    getCurrentUser()
    {
        const userString = localStorage.getItem("user") as string;
        if(userString)
        {
            return JSON.parse(userString);
        }
        return false;
    }
}

export default new AuthService();