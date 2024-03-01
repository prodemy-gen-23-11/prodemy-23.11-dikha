import axios from "axios";

const axiosProducts = axios.create({
    baseURL: "http://localhost:3000/products"
})

const axiosCart = axios.create({
    baseURL: "http://localhost:3000/cart"
})

const axiosInstance = axios.create({
    baseURL: "http://localhost:3000"
})



export { axiosCart, axiosInstance, axiosProducts };

