import axios from "axios";

export function registerUser(FormData){
    axios.post("http://localhost:3000", FormData)
}
