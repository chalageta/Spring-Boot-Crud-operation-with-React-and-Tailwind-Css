import axios from "axios";
const url = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(url);
