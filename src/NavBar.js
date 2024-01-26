import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import "./NavBar.css";
import { InputGroup } from "react-bootstrap";



const Navigation = () => {

        const [searchTerm, setSearchTerm] = useState('');
        const navigate = useNavigate();
        

        const handleSearch = () => {
          navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
        }


     
    return (
        <div className="navigation">
            <div className="overlap-group">
                <div className="text-wrapper"><Link to={"/recipes"}>Recipes</Link></div>
            </div>
            <div className="div"><Link to="/">Home</Link> </div>
            <div className="cart-button">
                <div className="text-wrapper-2">Who we are</div>

              

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


            <img className="nerd-logo-removebg" alt="Nerd logo removebg" src="./Nerd_logo-removebg-preview.png" />

            
      

        </div>
    );
};
export default Navigation;