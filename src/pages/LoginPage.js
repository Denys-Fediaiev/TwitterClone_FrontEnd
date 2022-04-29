import LoginForm from '../components/LoginForm';
import React from "react";
import LoginHeader from "../components/HeaderLogin";


function LoginPage() {
    return (
        <div className="App">
            <LoginHeader/>
            <LoginForm/>
        </div>
    );
}

export default LoginPage;
