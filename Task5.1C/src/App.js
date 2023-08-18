import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Routes from react-router-dom
import NiceBackground from "./NiceBackground";
import MainPage from "./MainPage";
import FreelancePage from "./FreelancePage"; 
import EmploymentPage from "./EmploymentPage"; 

function App() {
    return (
        <Router>
            <div>
                <NiceBackground />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/freelance" element={<FreelancePage />} />
                    <Route path="/employment" element={<EmploymentPage />} />
                </Routes>

         
            </div>
        </Router>
    );
}

export default App;
