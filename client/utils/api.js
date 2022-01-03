import axios from "axios";

// const API_URL = "http://157.245.58.88:5000";
const API_URL = "http://127.0.0.1:5000";
// const API_URL = "https://metismarket.tk";

const api = axios.create({
  baseURL: process.env.API_URL || API_URL,
});

export { api, API_URL };
