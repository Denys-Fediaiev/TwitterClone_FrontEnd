import React from 'react';
import ReactDOM, {render} from 'react-dom';
import './index.css';
import AppRegister from './AppRegister';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppLogin from "./AppLogin";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppRegister />}/>
            <Route path="/LoginForm" element={<AppLogin />} />
        </Routes>

    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
