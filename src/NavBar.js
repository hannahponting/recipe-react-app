import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "./utils";



const Navigation = (props) => {


    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const handleLogin = () => {
        
        
        setIsLoggedIn(true);

    };

    

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }



        return (
            <>
                <nav className="navigation">
                    <p className="user-greeting">Hello {props.userFirtName}</p>

                    <ul className="itemsAligned">
                        <li>
                            <img className="nerd-logo-removebg" alt="Nerd logo" src={require('.//Resources/invertedNerdLogo.png')}></img>

                        </li>

                        <li>
                            <Link className="hyperlink" to="/">Home</Link>

                        </li>

                        <li>
                            <Link className="hyperlink" to="/recipes">Recipes</Link>

                        </li>
                        <li>
                            <Link className="hyperlink" to="/WhoWeAre">Who We Are</Link>
                        </li>
                        {isLoggedIn ? (
                            <li>
                                <Link className="hyperlink" to ="/favourites">Favourites</Link></li>
                        ) : (
                            <li><Link className="hyperlink" onClick={handleLogin} to = "/login">Log In</Link></li>
                        )}

                    </ul>

                </nav>


                <Outlet />



            </>


        );
    
};
export default Navigation;