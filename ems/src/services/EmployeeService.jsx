import axios from "axios";
const url = "http://localhost:8080/api/employees";

export const listEmployees = () => axios.get(url);
export const createEmployee = (employee) => axios.post(url, employee);
export const getEmployee = (employeeId) => axios.get(url + '/'+ `${employeeId}`)

export const updateEmployee = (employeeId, employee) => axios.put(url + '/' + `${employeeId}`,employee)
export const deleteEmployee = (employeeId) => axios.delete(url + '/' + `${employeeId}`)