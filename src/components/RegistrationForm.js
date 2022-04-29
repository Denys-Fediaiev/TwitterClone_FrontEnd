import React, {useState} from 'react';
import {registerUser} from "../api/user";
import './style.css';
import {Link} from "react-router-dom";

function RegistrationForm() {

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        dateOfBirth: '',
    });

    const handleInputChange = (e) => {
        const {id , value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    }

    const handleSubmit = () =>{
        registerUser(formData);
    }


    return(
        <div className="form">
            <div className="form-body">
                <div className="inputWrapper">
                    <label className="formLabel" for="firstName">First Name </label>
                    <input
                        className="formInput"
                        type="text"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        id="firstName"
                        placeholder="First Name"
                    />
                </div>
                <div className="inputWrapper">
                    <label className="formLabel" htmlFor="dateOfBirth">date Of Birth</label>
                    <input
                        className="formInput"
                        type="text"
                        value={formData.dateOfBirth}
                        onChange={handleInputChange}
                        id="dateOfBirth"
                        placeholder="date Of Birth"
                    />
                </div>
                <div className="inputWrapper">
                    <label className="formLabel" for="lastName">Last Name </label>
                    <input
                        type="text"
                        name=""
                        id="lastName"
                        value={formData.lastName}
                        className="formInput"
                        onChange = {handleInputChange}
                        placeholder="LastName"
                    />
                </div>
                <div className="inputWrapper">
                    <label className="formLabel" for="email">Email </label>
                    <input
                        type="email"
                        id="email"
                        className="formInput"
                        value={formData.email}
                        onChange = {handleInputChange}
                        placeholder="Email"
                    />
                </div>
                <div className="inputWrapper">
                    <label className="formLabel" for="password">Password </label>
                    <input
                        className="formInput"
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange = {handleInputChange}
                        placeholder="Password"
                    />
                </div>
                <div className="inputWrapper">
                    <label className="formLabel" for="confirmPassword">Confirm Password </label>
                    <input
                        className="formInput"
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange = {handleInputChange}
                        placeholder="Confirm Password"
                    />
                </div>
            </div>
            <div id="footer">
                <button onClick={handleSubmit}
                        type="submit"
                        name="btn">Register
                </button>
            </div>
            <div>
                <b>Log in, if you have account</b>
                <nav
                    style={{
                        borderBottom: "solid 1px",
                        paddingBottom: "1rem",
                    }}
                >
                    <Link to="/Login">Login</Link>
                </nav>
            </div>

        </div>

    )
}
export default RegistrationForm
