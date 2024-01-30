import { Link, useNavigate } from "react-router-dom";
import Navigation from './NavBar';
//import {RecipeCardList} from "../src/recipe/recipeCard";

import React, { useEffect } from "react";
import { useState } from "react";
import "./WelcomePage.css";

const WelcomePage = (props) => {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();


    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    return (
        <>

            <header className="header">
                <div className="Title">
                    Home
                </div>
                <div className="search-container">
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





            <div class="rowWelcomePage">
                <div class="columnWelcomePage">

                    <Link to="/recipes/1730">
                        <img className="gif" src={require('.//Resources/1730.jpg')} alt="Salmon" />
                    </Link>

                    <div className="TextContainer"><div className="TextBody">Glazed Salmon</div></div>


                </div>
                <div class="columnWelcomePage">
                    <Link to="/recipes/1713">
                        <img className="gif" src={require('.//Resources/GreekYogurtParfait.jpg')} alt="Parfait" />
                    </Link>
                    <div className="TextContainer"><div className="TextBody">Greek Yogurt Parfait</div></div>


                </div>
                <div class="columnWelcomePage">
                    <Link to="/recipes/1719">
                        <img className="gif" src={require('.//Resources/SushiRollswithSpicyTuna.jpg')} alt="Sushi" />
                    </Link>
                    <div className="TextContainer"><div className="TextBody">Sushi Rolls with Spicy Tuna</div></div>

                </div>
            </div>



        </>
    )
}

export default WelcomePage;