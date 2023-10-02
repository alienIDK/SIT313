import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from "./Navbar";
import Home from "./Home";
import Subscribe from './Subscribe';


function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path='/subscribe' element= {<Subscribe />}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
