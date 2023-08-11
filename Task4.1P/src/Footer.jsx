import React from "react";
import './Footer.css'; 

function Footer() {
    return (
        <footer className="footer">
            <div className="section">
                <h2>Development</h2>
                <ul>
                    <li>How it Works</li>
                    <li>How to Create </li>
                    <li>How to Find it</li>
                </ul>
            </div>
            <div className="section">
                <h2>For Clients</h2>
                <ul>
                    <li>How to Find Us</li>
                    <li>How to Contact Us</li>
                </ul>
            </div>
            <div className="section">
                <h2>DEV Link</h2>
                <ul>
                    <li>Privacy Policy</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
