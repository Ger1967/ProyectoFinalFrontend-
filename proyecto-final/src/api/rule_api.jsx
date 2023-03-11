import axios from "axios";
// headers = { "Content-Type": "multipart/form-data" };
const API = axios.create({
  baseURL: "http://localhost:3002",
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;
