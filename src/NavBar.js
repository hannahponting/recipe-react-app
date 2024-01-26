import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";



const Navigation = () => {
    return (

        <div className="navigation">
            <div className="row">
                <div className="column">
                    <img className="nerd-logo-removebg" alt="Nerd logo removebg" src="../invertedNerdLogo.png" />

                </div>
                <div className="column">
                    <Link to={"/"}>
                        <button className="button">Home</button>
                    </Link>

                </div>
                <div className="column">
                    <Link to={"/recipes"}>
                        <button className="button">Recipes</button>
                    </Link>

                </div>
                <div className="column">
                    <Link to={"/WhoWeAre"}>
                        <button className="button">Who We Are</button>
                    </Link>
                </div>
            </div>

            <Outlet />

        </div>


    );
};
export default Navigation;