import React from "react";
import './email.css';
 

function Email(){
    return (
        <div className="email-container">
            <input type="email" id="email" name="email" placeholder="Enter your email" />
            <button className="subscribe-button">Subscribe</button>
        </div>
    );
}

export default Email