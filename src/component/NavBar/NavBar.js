import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { Dropdown, Nav, Navbar } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import { GetUserByEmail } from "../../utils";
import DropdownAccount from "./DropdownAccount";
import AuthContext from "../AuthContext/AuthContext";
import Container from 'react-bootstrap/Container';



const Navigation = (props) => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const context = useContext(AuthContext);
    let user = context.user;


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    return (
        <>
            <nav style={props.style} className="navigation">
                <div className="navbar-container">
                <Link to="/">
                    <img className="nerd-logo-removebg" alt="Nerd logo" src={require('../../Resources/invertedNerdLogo.png')}></img>

                </Link>



                <div>
                    <ul className="headerlist">
                        <div className="alignedToLeft">
                            <li>
                                <Link className="hyperlink" to="/">Home</Link>

                            </li>
                        </div>

                        <div className="alignedInTheMiddle">
                            <li>
                                <Link className="hyperlink" to="/recipes">Recipes</Link>

                            </li>
                        </div>

                        <div className="alignedInTheMiddle">
                            <li>
                                <Link className="hyperlink" to="/WhoWeAre">Who We Are</Link>
                            </li>
                        </div>

                        <div className="alignedInTheMiddle">
                            {user ? (
                                <li> <DropdownAccount className="drop-down-menu" /></li>
                            ) : (
                                <li><Link className="hyperlink" to="/login">Log In</Link></li>
                            )}
                        </div>





                    </ul>
                </div>
                </div>


                

            </nav>


            <Outlet />



        </>


    );

};
export default Navigation;