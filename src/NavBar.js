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

                <div className="row">
                    {/* <div className="column"> */}
                        <img className="nerd-logo-removebg" alt="Nerd logo" src={require('.//Resources/invertedNerdLogo.png')}></img>

                    {/* </div> */}
                    {/* <div className="column"> */}
                        <a className="hyperlink" href="/">Home</a>

                    {/* </div> */}
                    // <div className="column">
                        <a className="hyperlink" href="/recipes">Recipes</a>

                    {/* </div> */}
                    {/* <div className="column"> */}
                        <a className="hyperlink" href="/WhoWeAre">Who We Are</a>

                    </div>
                </div>

            </nav>


            <Outlet />

        </div>




    );
};
export default Navigation;