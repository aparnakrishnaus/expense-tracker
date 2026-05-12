import axios from "axios";

const API = axios.create({
    baseURL:"http://127.0.0.1:8000/api/expenses/",
});
export const getExpenses = () => API.get("expenses/")
export const addExpense = (data) => API.post("",data);