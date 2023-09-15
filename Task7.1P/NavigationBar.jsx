import React from "react";
import {Outlet, Link} from "react-router-dom"
import './MainPage.css';
function NavigationBar()
{
    return  <div>
        <Link className = "navBar" to="/login" >Login</Link>
        <Link className = "navBar" to="/signup" >SignUp</Link>
        <Outlet />
        
    </div>
}
export default NavigationBar