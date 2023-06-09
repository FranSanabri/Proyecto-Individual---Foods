import React from "react";
import { NavLink } from 'react-router-dom';
import './Navbar.css'
import SearchBar from "./SearchBar";

export default function NavBar() {
    return (
        <>
        <nav className="navbar">
            <NavLink exact to="/home">
            </NavLink>
            <SearchBar/>
            <NavLink exact to="/create">
                <span className="add">
                    Add Recipe
                </span>

            </NavLink>
            <img className="logo-1" src="https://fripozo.com/wp-content/uploads/icon-recetas.png" />
            <NavLink exact to="/about">
                <span className="about">
                    About
                </span>

            </NavLink>
        </nav>
        </>
    )
}