import axios from "axios";

export const Axios = axios.create({
    baseURL:`${process.env.REACT_APP_BASE_URL}/?token=${REACT_APP_ACCESS_TOKEN}`
})