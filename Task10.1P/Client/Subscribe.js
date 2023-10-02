import React, { useState } from 'react';
import './Subscribe.css';

const Subscribe = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Make an HTTP POST request to your server
        fetch('http://localhost:3010/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                // Display a success message to the user
                alert('Welcome message sent successfully!');
            })
            .catch((error) => {
                console.error('Error sending data:', error);
                // Display an error message to the user
                alert('Error: Failed to send data. Please try again later');
            });
    };

    return (
        <div className="Subscribe">
            <form onSubmit={handleSubmit}>
                <div className="form_container">
                    <h1>Sign Up to Deakin Newsletter</h1>
                    <hr />

                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            placeholder="First Name"
                            value={formData.first_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="col">
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            placeholder="Last Name"
                            value={formData.last_name}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className="button">
                        Subscribe
                    </button>
                </div>

                
            </form>
        </div>
    );
};

export default Subscribe;

