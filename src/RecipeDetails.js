import { Await, useParams } from "react-router-dom"
import { GetRecipes, GetRecipesById } from "./utils";


function RecipeDetails(props) {
    let params = useParams()
    const recipes = props.recipes;
    return <div className="wrapper">

        {recipes.map((recipe) => {
            if (recipe.id == params.id)
            
            return (
        <div>
                <div className="recipe-details-page">
                    <h1>{recipe.name}</h1>
                     <img src={`http://localhost:8080/api/recipes/image/${recipe.id}`}class="card__image"/>
                        <h2>Details</h2>
                        <ul className="recipe-details">
                            <li><strong>Name: </strong>{recipe.name}</li>
                            <li><strong>Meal Type: </strong>{recipe.mealType[0] + recipe.mealType.slice(1).toLowerCase()}</li>
                            <li><strong>Cuisine: </strong>{recipe.cuisine[0] + recipe.cuisine.slice(1).toLowerCase()}</li>
                            <li><strong>Serving: </strong>{recipe.serving}</li>
                            <li><strong>Time to cook: </strong>{recipe.time_to_cook}</li>
                            <li><strong>Difficulty Level: </strong>{recipe.difficulty_level[0] + recipe.difficulty_level.slice(1).toLowerCase()}</li>
                            <li><strong>Cost: </strong>{recipe.cost[0] + recipe.cost.slice(1).toLowerCase()}</li>
                            <li><strong>Spice level: </strong>{recipe.spice_level[0] + recipe.spice_level.slice(1).toLowerCase()}</li>
                        </ul>
                        </div>
                        <h2>Ingredients: </h2>
                        <ul className="recipe-ingredients">
                            {recipe.ingredients.map((ingredient, index) => {
                            return <li key="{index}">{ingredient}</li>})}
                        </ul>
                        <h2>Instructions:</h2>
                        <ul className="recipe-instructions">
                            {recipe.instructions.map((ingredient, index) => {
                            return <li key="{index}">{ingredient}</li>})}
                        </ul>

            
             
                </div>

            )
        })}

    </div>;
}

export default RecipeDetails;