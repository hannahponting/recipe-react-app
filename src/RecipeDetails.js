import { Await, useParams } from "react-router-dom"
import { GetRecipes, GetRecipesById } from "./utils";


function RecipeDetails() {
    let params = useParams()
    const recipes = GetRecipes();
    return <div className="wrapper">

        {recipes.map((recipe) => {
            if (recipe.id == params.id)

            return (
                <div>
                    <h1>{recipe.name}</h1>
                     <img src={`http://localhost:8080/api/recipes/image/${recipe.id}`}class="card__image"/>
                </div>

            )
        })}

    </div>;
}

export default RecipeDetails;