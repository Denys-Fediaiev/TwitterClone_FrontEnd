import axios from "axios";

export function registerUser(FormData){
    axios.post("http://localhost:8000/register", FormData);
}

export function loginUser(FormData){
    axios.get("http://localhost:8000/login", FormData)
}
