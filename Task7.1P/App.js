import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import MainPage from "./MainPage";
import './MainPage.css';
import SignUpPage from "./SignUpPage";
import LoginPage from "./LoginPage";
import NavigationBar from "./NavigationBar";




function App() {
    return (
        <Router>
            <div>
                <NavigationBar></NavigationBar>
                <Routes>
                    <Route path="/" element={<NavigationBar />} />
                    <Route index element={<MainPage />}/>
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUpPage />} />

                </Routes>

         
            </div>
        </Router>
    );
}

export default App;
