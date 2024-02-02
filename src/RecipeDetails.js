import { Await, useParams } from "react-router-dom"
import { GetNewRatingById, GetRatingById, GetRecipes, GetRecipesById } from "./utils";
import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import StarRating from "./StarRating";
import RateRecipe from "./RateRecipe";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "react-bootstrap";


function RecipeDetails(props) {
    const [starRating, setStarRating] = useState(null);
    const params = useParams();

    const fetchData = async () => {
        try {
            const rating = await Promise.resolve(GetNewRatingById(params.id));
            console.log(rating);
            setStarRating(rating);
            console.log(starRating);

        } catch (error) {
            console.error('Error fetching rating:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.id]);

    try {
        let recipe = GetRecipesById(params.id);
        return (

            <div className="recipe-detailspage-container">
                <header className="header">
                    <div className="recipe-title-container">
                       <div id="recipe-title">{recipe.name}</div> 
                        
                        </div>
                     <StarRating  stars={starRating} recipeId={recipe.id}></StarRating>
                </header>


                <div className="Divider"></div>
                <div className="recipe-details">
                    <div class="details_image">
                   
                     <img src={`http://localhost:8080/api/recipes/image/${recipe.id}`}class="details_image"/>
                     </div>

                    <h2 className="subtitles">Details</h2>
                    <ul className="details">
                        <li className="timer-listitem"><img src={require('.//Resources/clockIcon.png')} id="timer" />
                            <strong>{recipe.time_to_cook} </strong></li>
                        <li><strong>Name: </strong>{recipe.name}</li>
                        <li><strong>Meal Type: </strong>{recipe.mealType[0] + recipe.mealType.slice(1).toLowerCase()}</li>
                        <li><strong>Cuisine: </strong>{recipe.cuisine[0] + recipe.cuisine.slice(1).toLowerCase()}</li>
                        <li><strong>Serving: </strong>{recipe.serving}</li>
                        <li><strong>Difficulty Level: </strong>{recipe.difficulty_level[0] + recipe.difficulty_level.slice(1).toLowerCase()}</li>
                        <li><strong>Cost: </strong>{recipe.cost[0] + recipe.cost.slice(1).toLowerCase()}</li>
                        <li><strong>Spice level: </strong>{recipe.spice_level[0] + recipe.spice_level.slice(1).toLowerCase()}</li>
                    </ul>
                    <div>
                    </div>

                    <div className="boxes">
                        <h2 className="subtitles">Ingredients </h2>
                        <ul className="recipe-ingredients">
                            {recipe.ingredients.map((ingredient) => {
                                return (<li>{ingredient}</li>) 
                            })}
                        </ul>
                    </div>
                    <div className="boxes">
                        <h2 className="subtitles">Instructions</h2>
                        <ol className="recipe-instructions">
                            {recipe.instructions.map((ingredient, index) => {
                                return <li key="{index}">{ingredient}</li>
                            })}
                        </ol>
                    </div>
                </div>

                

                <Accordion>
                    <AccordionHeader className="accordion-header"><h2 className="subtitles-accordion">Given this recipe a try?</h2></AccordionHeader>
                    <AccordionBody className="accordion-body" >
                        <h3 id="subtitles-accordion">Rate this recipe</h3>
                            <RateRecipe fetchData={fetchData} id={recipe.id} userID={props.userID}></RateRecipe>
                        </AccordionBody>
                </Accordion>


            </div>
        );
    }
    catch (err) {
        return (<div>
            <p>error</p>
        </div>)
    }


}

export default RecipeDetails;