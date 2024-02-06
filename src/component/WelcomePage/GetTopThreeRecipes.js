import React, { useEffect, useState } from "react";
import { Card } from "../recipeCards/recipeCard";

const GetTopThreeRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTopRated(3);
            setRecipes(result.recipes);
        };
        console.log("print out recipes below")
        console.log(recipes)

        fetchData();
    }, []);




    return (
        <>
            {recipes.length > 0 ? (
                <div className="wrapper">

                    
                    {recipes.map((recipe) => (
                        <Card
                            key={recipe.id}
                            img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                            title={recipe.name}
                            description={"Delicious recipe from " + recipe.cuisine.toLowerCase() + " cuisine. It serves up to " + recipe.serving + " people!"}
                            id={recipe.id}
                        />
                    ))}
                </div>
            ) : (
                <div className="no-recipes-message">
                    No recipes to display.
                </div>
            )}
        </>
    )
};


export async function getTopRated(topRecipeNumber) {
    const urlApi = `http://localhost:8080/api/recipes/top/${topRecipeNumber}`
    const response = await fetch(urlApi);

    const body = await response.json();

    console.log("body")
    console.log(body)
    const data = ({ recipes: body, isLoading: false })
    return data;


}


export default GetTopThreeRecipes;