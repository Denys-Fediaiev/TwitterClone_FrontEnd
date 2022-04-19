import axios from "axios";

export function registerUser(FormData){
    axios.post("jdbc:mysql://localhost:3306/?user=root", FormData)

}