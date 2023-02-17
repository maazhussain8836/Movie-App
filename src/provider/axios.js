import axios from "axios";

const instance = axios.create({
    baseURL: 'https://mdblist.p.rapidapi.com/'
})

export default instance;