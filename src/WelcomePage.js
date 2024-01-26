import { Link } from "react-router-dom";
import Navigation from './NavBar';
//import {RecipeCardList} from "../src/recipe/recipeCard";
import './WelcomePage.css';

const WelcomePage = (props) => {
    return (
        <>

            <h1 className="Title"> Home </h1>
            <div className="Divider"></div>

            {/* <h2 className="Title2">Highlights</h2> */}





            <div class="row">
                <div class="column">

                    <Link to="/recipes/1730">
                        <img className="gif" src={require('.//1730.jpg')} alt="Salmon" />
                    </Link>

                    <div className="TextContainer"><div className="TextBody">Glazed Salmon</div></div>
                    

                </div>
                <div class="column">
                    <Link to="/recipes/1713">
                        <img className="gif" src={require('.//GreekYogurtParfait.jpg')} alt="Parfait" />
                    </Link>
                    <div className="TextContainer"><div className="TextBody">Greek Yogurt Parfait</div></div>
            

                </div>
                <div class="column">
                    <Link to="/recipes/1719">
                        <img className="gif" src={require('.//SushiRollswithSpicyTuna.jpg')} alt="Sushi" />
                    </Link>
                    <div className="TextContainer"><div className="TextBody">Sushi Rolls with Spicy Tuna</div></div>
    
                </div>
            </div>



        </>
    )
}

export default WelcomePage;