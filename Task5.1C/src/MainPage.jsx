import React from 'react';
import { Link } from 'react-router-dom';
import './MainPage.css';

function MainPage() {
    return (
        <div className="niceBackground">
            <div className="content-container">
                <h1 className="title">New Job: Select Job Type</h1>
                <p className="description">Create fun and exciting opportunity for others </p>
                <div className="button-container">
                    <Link to="/freelance" className="button freelance-button">FREELANCE</Link>
                    <Link to="/employment" className="button employment-button">EMPLOYMENT</Link>
                </div>
            </div>
        </div>
    )
}

export default MainPage;
