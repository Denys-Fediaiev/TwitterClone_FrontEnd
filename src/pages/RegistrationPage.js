import HeaderRegistration from '../components/HeaderRegistration';
import LoginForm from '../components/RegistrationForm';
import React from "react";


function RegistrationPage() {
    return (
        <div className="App">
            <HeaderRegistration/>
            <LoginForm/>
        </div>
    );
}

export default RegistrationPage;
