import { Link, useNavigate } from "react-router-dom";
import Navigation from '../NavBar/NavBar';


import RecipeFilterApp from "../FilterBar/RecipeFilter";

import React, { useEffect } from "react";
import { useState } from "react";
import "./WelcomePage.css";
import GetTopThreeRecipes from "./GetTopThreeRecipes";

const WelcomePage = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    return (


        <div className="welcomepage-container">


            <header className="header">
                <div className="welcomepage-title-container">
                    <div className="Title">
                        Home
                    </div>
                </div>

                <div className="search-bar">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
            </header>


            <div className="Divider"></div>

            {/* <h2 className="Title2">Highlights</h2> */}


            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={require('../../Resources/cookingVideo.mp4')} type='video/mp4'/>
                </video>
            </div>


            <header className="subheader">
                <div className="subheading">
                    Top Rated recipes
                </div>
            </header>


            <GetTopThreeRecipes></GetTopThreeRecipes>

            {/*isLoggedIn={props.isLoggedIn}*/}


        </div>
    )
};


export default WelcomePage;