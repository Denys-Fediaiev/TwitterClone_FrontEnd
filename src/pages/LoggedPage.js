import React, {useState} from 'react';
import "../LoggedPage.css"


function LoggedPage(){
    const [formData, setFormData] = useState({
        post: '',
    });

    const handleInputChange = (e) => {
        const {id, value} = e.target;

        setFormData(prevState => ({
            ...prevState,
            [id]: value,
        }));
    }

    const handleSubmit = () =>{
        //TODO сделать функционал кнопки
        console.log(alert("Thank you for your Twit!"))
    }
    return  (
        <div className="post_container">
            <h1>Post Your Twit!</h1>
            <input type="text"
                   className="formInput"
                   value={formData.post}
                   onChange={handleInputChange}
            />
            <button onClick={handleSubmit}
                    type="submit"
                    name="btn">
                Post
            </button>
        </div>
    );
}

export default LoggedPage
