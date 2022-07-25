import axios from 'axios';
export default axios.create({
    baseURL: "http://localhost:3500/api",
    // baseURL: "https://comp229-m2022-section2.herokuapp.com/api"
    headers: {
        "Content-type": "application/json"
    }
});