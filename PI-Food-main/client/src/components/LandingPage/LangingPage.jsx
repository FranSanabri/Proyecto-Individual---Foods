import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className="box">
            <div className="container">
            <img className="logo-10" src="https://logodix.com/logo/2178221.png" />
                <h1 className="welcomeMessage">Welcome to my Project</h1>
                <span className="loveMessage">What you want cooking today?</span>
                <button className="homeRedirect"><Link to="/home">Find Recipes</Link></button>
            </div>
        </div>

    );
}