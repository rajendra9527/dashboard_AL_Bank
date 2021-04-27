import axios from "axios";
import AppConstants from "../App.Constants";


const httpClient = axios.create({
    baseURL: "https://localhost:44367/albank"
});

export default httpClient;