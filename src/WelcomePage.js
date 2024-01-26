import {Link} from "react-router-dom";
import Navigation from './NavBar';
//import {RecipeCardList} from "../src/recipe/recipeCard";
import './WelcomePage.css';

const WelcomePage = (props) => {
    return (
        <>

            <h1 className="Title"> Home </h1> 
            <div className="Divider"></div>
            <div><img className= "gif" src={require('.//cooking.gif')} alt="Cooker" /></div>
            <div className="Announcement">Discover our latest recipes!</div>


        </>
    )
}

export default WelcomePage;