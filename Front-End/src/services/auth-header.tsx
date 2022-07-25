export default function AuthHeader()
{
    const userString = localStorage.getItem("user");
    let user = null;

    if(userString)
    {
        user = JSON.parse(userString);
    }

    if(user && user.token)
    {
        return {headers: {"Authorization": "Bearer" + user.token }};
    }
    else
    {
        return {};
    }
}