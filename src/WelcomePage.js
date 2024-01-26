import {Link} from "react-router-dom";
import Navigation from './NavBar';

import RecipeCardList from "./recipe/recipeCard";
import RecipeFilterApp from "./filterBar/RecipeFilter";
//import {RecipeCardList} from "../src/recipe/recipeCard";



const WelcomePage = (props) => {
    return (
        <>

            <h1>This is the home page! </h1>


            <div>

                <RecipeFilterApp></RecipeFilterApp>


            </div>

        </>
    )
}

export default WelcomePage;