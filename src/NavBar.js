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


            <div className="search-container">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                
              />
              <button onClick={handleSearch}>Search</button>
              </div>

            
            <Outlet />


            
      

        </div>


    );
};
export default Navigation;