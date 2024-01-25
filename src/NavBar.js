import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./NavBar.css";


const Navigation = () => {
    return (
        <div className="navigation">
            <div className="overlap-group">
                <div className="text-wrapper"><Link to={"/recipes"}>Recipes</Link></div>
            </div>
            <div className="div"><Link to="/">Home</Link> </div>
            <div className="cart-button">
                <div className="text-wrapper-2">Who we are</div>
            </div>
            <Outlet />

            <img className="nerd-logo-removebg" alt="Nerd logo removebg" src="./Nerd_logo-removebg-preview.png" />
        </div>
    );
};
export default Navigation;