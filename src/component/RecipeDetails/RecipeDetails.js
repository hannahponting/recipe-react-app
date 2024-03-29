import { useParams } from "react-router-dom"
import {GetRatingById, GetRecipesById} from "../../utils";
import "./RecipeDetails.css";
import { useEffect, useState } from "react";
import StarRating from "../StarRating/StarRating";
import RateRecipe from "../RateRecipe/RateRecipe";
import { Accordion, AccordionBody, AccordionHeader } from "react-bootstrap";
import LikeButton from "../likeButton/likeButton";


function RecipeDetails(props) {
    const [starRating, setStarRating] = useState(null);
    const params = useParams();

    const fetchData = async () => {
        try {
            await GetRatingById(params.id).then((rating) => { setStarRating(rating) })
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
            <>


                <div className="recipedetails-page-container">
                    <header className="header">
                        <div className="recipe-title-container">
                            <div id="recipe-title">{recipe.name}


                            </div>
                        </div>

                        <div className="like-button-container-recipe-info" >
                            <LikeButton recipeId={params.id}> </LikeButton>
                            <StarRating stars={starRating} recipeId={recipe.id}></StarRating>
                        </div>
                        
                    </header>



                    <div className="Divider"></div>
                    <div className="recipe-details">
                        <div className="details_image-container">
                            <img alt="" src={`http://localhost:8080/api/recipes/image/${recipe.id}`} className="details_image" />
                        </div>

                        <h2 className="subtitles">Details</h2>
                        <ul className="details">
                            <li className="timer-listitem"><img alt="" src={require('../../Resources/clockIcon.png')} id="timer" />
                                <strong>{recipe.time_to_cook} </strong>
                            </li>
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
                                {recipe.ingredients.map((ingredient, index) => {
                                    return (<li key={index}>{ingredient}</li>)
                                })}
                            </ul>
                        </div>
                        <div className="boxes">
                            <h2 className="subtitles">Instructions</h2>
                            <ol className="recipe-instructions">
                                {recipe.instructions.map((ingredient, index) => {
                                    return <li key={index}>{ingredient}</li>
                                })}
                            </ol>
                        </div>
                    </div>



                    <Accordion className="details-accordion">
                        <AccordionHeader className="accordion-header"><h2 className="subtitles-accordion">Given this recipe a try?</h2></AccordionHeader>
                        <AccordionBody className="accordion-body" >
                            <h3 id="subtitles-accordion">Rate this recipe</h3>
                            <RateRecipe fetchData={fetchData} id={recipe.id}></RateRecipe>
                        </AccordionBody>
                    </Accordion>


                </div>

            </>
        );
    }
    catch (err) {
    }


}

export default RecipeDetails;