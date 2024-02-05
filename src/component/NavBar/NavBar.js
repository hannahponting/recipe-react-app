import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { Dropdown, Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "../../utils";
import DropdownAccount from "./DropdownAccount";



const Navigation = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    return (
        <>
            <nav className="navigation">


                <Link to="/">
                    <img className="nerd-logo-removebg" alt="Nerd logo" src={require('../../Resources/invertedNerdLogo.png')}></img>

                </Link>



                <div>
                    <ul className="itemsAligned">
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
                            <li> <DropdownAccount className="drop-down-menu" userID={props.userID} /></li>
                        ) : (
                            <li><Link className="hyperlink" to="/login">Log In</Link></li>
                        )}


                    </ul>
                </div>

            </nav>


            <Outlet />



        </>


    );

};
export default Navigation;