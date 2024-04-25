import axios from "axios";

export const pikwyAxios = axios.create({
    baseURL:process.env.REACT_APP_BASE_URL,
    responseType:"blob",
    params:{
        tkn: `${process.env.REACT_APP_ACCESS_TOKEN}`,
        fs: 0,
    }
})

export const cloudinaryAxios = axios.create({
    baseURL:process.env.REACT_APP_CLOUDINARY_URL,
})