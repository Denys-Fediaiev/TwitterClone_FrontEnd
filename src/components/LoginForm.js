import React, {useState} from 'react';
import {loginUser} from "../api/user";
import './style.css';
import {Link} from "react-router-dom";

function LoginForm() {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    }

    const handleSubmit = () => {
        loginUser(formData);
    }


    return (
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
                <div id="footer">
                    <button onClick={handleSubmit}
                            type="submit"
                            name="btn">Login
                    </button>
                    <div>
                        <b>Register, if you don't have account</b>
                        <nav
                            style={{
                                borderBottom: "solid 2px",
                                paddingBottom: "1rem",
                            }}
                        >
                            <Link to="/">Register</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LoginForm