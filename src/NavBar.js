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



    return (
        <div>
            <nav className="navigation">
            <h3>Hello {props.userID}</h3>

                <ul className="itemsAligned">
                    {/* <div className="column"> */}

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

                    <li>
                        <Link className="hyperlink" to="/login">Login here</Link>

                    </li>
                    {/* </div> */}
                    {/* <div className="column"> */}

                    {/* </div> */}
                    {/* // <div className="column"> */}

                    {/* </div> */}
                    {/* <div className="column"> */}

                    {/* </div> */}
                </ul>

            </nav>


            <Outlet />

        </div>




    );
};
export default Navigation;