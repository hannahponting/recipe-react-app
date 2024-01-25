import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import {GetRecipes} from "../utils";
import { Link } from "react-router-dom";

function RecipeCardList() {
    const recipes = GetRecipes();
    return <div className="wrapper">

        {recipes.map((recipe) => {

            return (

                <Card
                    img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                    title={recipe.name}
                    description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
                    id={recipe.id}
                />

            )
        })}

    </div>;
}

function Card(props) {
    let link = "/recipes/"+props.id;
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} class="card__image"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <Link to = {link}>
            <button className="card__btn">View Recipe</button>
            </Link>
        </div>
    );
}

export default RecipeCardList;
