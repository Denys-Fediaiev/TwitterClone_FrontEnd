import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import React from "react";
import LoginHeader from "./components/HeaderLogin";


function AppLogin() {
    return (
        <div className="App">
            <LoginHeader/>
            <LoginForm/>
        </div>
    );
}

export default AppLogin;
