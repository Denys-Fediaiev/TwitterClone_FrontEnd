import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import RegistrationForm from './components/RegistrationForm';
import React from "react";


function AppRegister() {
    return (
        <div className="App">
            <Header/>
            <RegistrationForm/>
        </div>
    );
}

export default AppRegister;

