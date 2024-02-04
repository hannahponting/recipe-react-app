import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "./utils";



const Navigation = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    const handleLogOut = () => {
        props.setIsLoggedIn(false);
        props.setUserId('');
    }

        return (
            <>
                <nav className="navigation">
                         {props.isLoggedIn ? (
                                 <h3>Hello {props.userID}</h3>
                        ) : (
                            <h3>Hello Guest</h3>
                        )}
                   

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


                        {props.isLoggedIn ? (
                            <>
                            <li> <Link className="hyperlink" to ="/favourites">Favorites</Link></li>
                            <li> <Link className="hyperlink" to="/" onClick={handleLogOut}>Log Out</Link></li>
                            </>
                        ) : (
                            <li><Link className="hyperlink" to = "/login">Log In</Link></li>
                        )}
                        

                    </ul>

                </nav>


                <Outlet />



            </>


        );
    
};
export default Navigation;