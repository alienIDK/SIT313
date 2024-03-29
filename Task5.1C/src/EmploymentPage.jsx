import React from 'react';
import { Link } from 'react-router-dom'; 
import OpportunityInput from './OpportunityInput';
import './OpportunityInput.css';

function EmploymentPage() {

    const experienceSection = (
        <div className="form-group">
            <h2>Experience: </h2>
            <div className="form-group">
                    <label for="experience" >Experience in</label>
                    <input type="text" id="experience" name="experience" />
            </div>  
            <div className="form-group">
                    <label for="duration" >For at least</label>
                    <input type="text" id="duration" name="experdurationience" />
            </div>  
        </div>
    );

    return (
        <div className="page-container">
            
            <h1>Employment Opportunities</h1>
            <OpportunityInput additionalSection={experienceSection} />
            <div className="back-button">
                <Link to="/">Go Back to Main Page</Link>
            </div>
           
        </div>
    );
}

export default EmploymentPage;
