import React, { useEffect, useState } from "react";
import { Card } from "../recipeCards/recipeCard";
import { getTopRated } from "../../utils";

const GetTopThreeRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    

    useEffect(() => {
        const fetchData = async () => {
            const result = await getTopRated(3);
            setRecipes(result.recipes);
        };


        fetchData();
    }, []);




    return (
        <>
            {recipes?.length > 0 ? (
            <div className="wrapper">
                {recipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        title={recipe.name}
                        // description={"Delicious recipe from " + recipe.cuisine.toLowerCase() + " cuisine. It serves up to " + recipe.serving + " people!"}
                        id={recipe.id}
                        style={recipe.style}
                        time_to_cook={recipe.time_to_cook}
                        serving={recipe.serving}
                        cuisine={recipe.cuisine}
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


export default GetTopThreeRecipes;