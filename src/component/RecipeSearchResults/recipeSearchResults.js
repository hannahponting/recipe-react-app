import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "../recipeCards/recipeCard.css";
import "./RecipeSearchResults.css"
import { GetRecipesByKeyword} from "../../utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Card } from "../recipeCards/recipeCard";

function RecipeSearchResults() {
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get('keyword')



    const [recipes, setRecipes] = useState([]);
    const [currentPage] = useState(1);
    let data = GetRecipesByKeyword(searchTerm)
    let searchdata = data
    const fetchedRecipes = data.recipes;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setRecipes(fetchedRecipes);
    }, [currentPage, data]);
    useEffect(() => {
        setTotalPages(data.totalPages);
    }, [data]);


    if (searchdata.length > 0) {


        return <div className="recipesearchresults-container">

            <div>
                <header className="header">
                    <div className="Title">
                        Recipes with {searchTerm}
                    </div>
                </header>
            </div>
            <div className="Divider" ></div>
            <div className="wrapper">



                {searchdata.map((recipe) => {

                    return (<>

                        <Card
                            key={recipe.id}
                            recipe = {recipe}
                        />
                    </>
                    )
                }
                )}
            </div>
        </div>
    }

    else return (
        <h1 className="search-error-container 
                    ">
            Please enter a valid recipe to search for!
        </h1>

    )














}
export default RecipeSearchResults;
