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
                        recipe={recipe}
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