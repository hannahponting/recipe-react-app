import { Await, useParams } from "react-router-dom"
import { GetRecipes, GetRecipesById } from "./utils";
import "./RecipeDetails.css";


function RecipeDetails(props) {
    let params = useParams();
    try{
    let recipe = GetRecipesById(params.id);
            return (
        <div className="details-page">
                <h1 className="heading">{recipe.name}</h1>
                <div className="Divider"></div>
                <div className="details">
            
                     <img src={`http://localhost:8080/api/recipes/image/${recipe.id}`}class="details_image"/>
                     
                        <h2>Details</h2>
                        <ul className="properties">
                        <li><img src={require('./icons8-clock-100 1.png')} className="timer"/>
                            <strong> &nbsp;</strong>{recipe.time_to_cook}</li>
                            <li><strong>Name: </strong>{recipe.name}</li>
                            <li><strong>Meal Type: </strong>{recipe.mealType[0] + recipe.mealType.slice(1).toLowerCase()}</li>
                            <li><strong>Cuisine: </strong>{recipe.cuisine[0] + recipe.cuisine.slice(1).toLowerCase()}</li>
                            <li><strong>Serving: </strong>{recipe.serving}</li>
                            <li><strong>Difficulty Level: </strong>{recipe.difficulty_level[0] + recipe.difficulty_level.slice(1).toLowerCase()}</li>
                            <li><strong>Cost: </strong>{recipe.cost[0] + recipe.cost.slice(1).toLowerCase()}</li>
                            <li><strong>Spice level: </strong>{recipe.spice_level[0] + recipe.spice_level.slice(1).toLowerCase()}</li>
                        </ul>
                 
                        <div className="boxes">
                        <h2>Ingredients </h2>
                        <ul className="recipe-ingredients">
                            {recipe.ingredients.map((ingredient, index) => {
                            return <li key="{index}">{ingredient}</li>})}
                        </ul>
                        </div>
                        <div className="boxes">
                        <h2>Instructions</h2>
                        <ul className="recipe-instructions">
                            {recipe.instructions.map((ingredient, index) => {
                            return <li key="{index}">{ingredient}</li>})}
                        </ul>
                        </div>
                        </div>

            
             </div>
            );
                            }
                            catch(err){
                                return(<div>
                                    <p>error</p>
                                </div>)
                            }
      

}

export default RecipeDetails;