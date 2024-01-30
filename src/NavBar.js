import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { Nav } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";



const Navigation = () => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }



    return (
        <div>
            <nav className="navigation">

                <ul className="itemsAligned">
                    {/* <div className="column"> */}

                    <li>
                    <img className="nerd-logo-removebg" alt="Nerd logo" src={require('.//Resources/invertedNerdLogo.png')}></img>

                    </li>

                    <li>
                        <a className="hyperlink" href="/">Home</a>

                    </li>

                    <li>
                        <a className="hyperlink" href="/recipes">Recipes</a>

                    </li>

                    <li>
                    <a className="hyperlink" href="/WhoWeAre">Who We Are</a>

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