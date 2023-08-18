import React, { useState } from 'react'; // Import useState
import './OpportunityInput.css';

function OpportunityInput(props) {

    const { additionalSection } = props; // additional section to be added here 

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };

    


    return (
        <div className="page-container">
            <h2>Describe your Job</h2>
            
            <form className="opportunity-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title/Position:</label>
                    <input type="text" id="title" name="title" required />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Job Description:</label>
                    <textarea id="description" name="description" rows="4" ></textarea>
                </div>

                <div className="form-group">
                    <label for="skills" >Skills Required:</label>
                    <input type="text" id="skills" name="skills"  placeholder="Please add skills that your job is required e.g, Java"/>
                </div>              
                <i>Developers will find your job based on the skills you added here.</i>



                <h2>Project Condition </h2>
                <div className="payment-input-group">
                    <label htmlFor="project">Project length (days):</label>
                    <input type="number" id="project" name="project"  />
                </div>

                <div className="payment-input-group">
                    <label htmlFor="min-amount">Payment:</label>
                    <div className="input-boxes">
                        <input type="number" id="min-amount" name="min-amount" placeholder="Min" />
                        <span className="divider">-</span>
                        <input type="number" id="max-amount" name="max-amount" placeholder="Max" />
                    </div>
                </div>
 

                <div className="form-group">
                    <label htmlFor="project">Working Hours:</label>
                    <input type="number" id="workingH" name="workingH"  />
                </div>

                {additionalSection}

                <button type="submit" className="submit-button">Submit</button>
            </form>
            {isSubmitted && <p>Job submitted successfully!</p>}
        </div>
    );
}

export default OpportunityInput;
