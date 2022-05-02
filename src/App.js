import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import LoggedPage from "./pages/LoggedPage";

function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<RegistrationPage />}/>
                <Route path="/Login" element={<LoginPage />} />
                <Route path="/Logged" element={<LoggedPage />} />
            </Routes>

        </BrowserRouter>
    );
}

export default App
