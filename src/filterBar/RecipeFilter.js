import React, {useEffect, useState} from 'react';
import {Card} from "../recipe/recipeCard"
const RecipeFilter = ({ applyFilters }) => {
    const [costLevel, setCostLevel] = useState('LOW');
    const [difficultyLevel, setDifficultyLevel] = useState('EASY');
    const [spiceLevel, setSpiceLevel] = useState('NONE');


    const handleCostChange = (e) => {
        setCostLevel(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficultyLevel(e.target.value);
    };

    const handleSpiceLevelChange = (e) => {
        setSpiceLevel(e.target.value);
    };


    return (
        <div className="filter-containers">
            <form>
                <label htmlFor="spice_level">Spicy Level:</label>
                <select id="spice_level" name="spice_level" value={spiceLevel} onChange={handleSpiceLevelChange}>
                    <option value="NONE">None</option>
                    <option value="MILD">Mild</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="SPICY">Spicy</option>
                </select>

                <label htmlFor="difficulty">Difficult Level:</label>
                <select id="difficulty" name="difficulty" value={difficultyLevel} onChange={handleDifficultyChange}>
                    <option value="EASY">Easy</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="HIGH">High</option>
                    {/* Add more options as needed */}
                </select>

                <label htmlFor="cost">Cost Level:</label>
                <select id="cost" name="cost" value={costLevel} onChange={handleCostChange}>
                    <option value="LOW">Low</option>
                    <option value="MODERATE">Moderate</option>
                    <option value="PRICEY">Pricey</option>
                    {/* Add more options as needed */}
                </select>

                <br />
                <button id="apply-filters" type="button" onClick={() => applyFilters(costLevel, difficultyLevel, spiceLevel)}>
                    Apply Filters
                </button>
                <br />
            </form>
        </div>

    );

};

 const RecipeList = ({ recipes }) => {
    return (

        < div className = "wrapper" >
         {recipes.length === 0 ? (
                <p>No recipes for this filter combination found</p>
            ) : (
                recipes.map((recipe) => (
                    <>
                    {/*<Card> </Card>*/}
                        <Card
                            key={recipe.id}
                            img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                            title={recipe.name}
                            description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
                            id={recipe.id}
                        />
                    </>
                ))
            )}
        </div>
    );
};

export default function RecipeFilterApp() {

    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [filterButtonStatus,setFilterButtonStatus] = useState("off");
    const applyFilters = (costLevel, difficultyLevel, spiceLevel) => {

        setFilterButtonStatus('on');

        fetch(`http://localhost:8080/api/recipes/cost/${costLevel}`)
            .then(response => response.json())
            .then(data => {
                let newdata = data.filter(recipe => {
                    return recipe["difficulty_level"].includes(difficultyLevel) && recipe["spice_level"].includes(spiceLevel)

                });

                setFilteredRecipes(newdata);

            })


    }

                return (
                    <div>
                        <RecipeFilter applyFilters={applyFilters}/>
                        {filterButtonStatus === 'on' && (
                            <RecipeList recipes={filteredRecipes} />
                        )}


                    </div>
                )
            };








