import axios from "axios";

const instance = axios.create({
    baseURL: "https://cisce.org",
});

export default instance;
