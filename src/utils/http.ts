import axios from "axios";
const BASE_API_URL = 'https://fakestoreapi.com/'

const axiosClient = axios.create({
    baseURL: BASE_API_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        "Idempotency-Key ": "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "*",
        "Access-Control-Allow-Origin": "*",
        " Accept": "application/json, text/plain",
    },
});

export function getRequest(url: string){
    return axiosClient.get(url);
}