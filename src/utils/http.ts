import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("access_token") || ""}`,
  },
});

export default http;
