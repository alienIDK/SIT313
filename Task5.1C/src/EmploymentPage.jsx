import React from 'react';
import { Link } from 'react-router-dom'; 
import OpportunityInput from './OpportunityInput';
import './OpportunityInput.css';

function EmploymentPage() {
    return (
        <div className="page-container">
            
            <h1>Employment Opportunities</h1>
            <OpportunityInput/>
            <div className="back-button">
                <Link to="/">Go Back to Main Page</Link>
            </div>
           
        </div>
    );
}

export default EmploymentPage;

