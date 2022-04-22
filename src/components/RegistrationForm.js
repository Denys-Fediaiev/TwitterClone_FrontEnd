import React, {useState} from 'react';
import {registerUser} from "../api/user";
import './style.css';

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
        console.log(formData);
        registerUser(formData);
        // let obj = {
        //     firstName : firstName,
        //     lastName:lastName,
        //     email:email,
        //     password:password,
        //     confirmPassword:confirmPassword,
        // }
        // const newPostKey = push(child(ref(database), 'posts')).key;
        // const updates = {};
        // updates['/' + newPostKey] = obj
        // return update(ref(database), updates);

    }


    return(
        <div className="form">
            <div className="form-body">
                <div className="inputWrapper">
                    <label className="form__label" for="firstName">First Name </label>
                    <input
                        className="form__input"
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
            <div class="footer">
                <button onClick={handleSubmit} type="submit" class="btn">Register</button>
            </div>
        </div>

    )
}

export default RegistrationForm