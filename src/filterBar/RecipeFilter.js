import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"

export const RecipeFilter = ({ applyFilters }) => {
    const [costLevel, setCostLevel] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [spiceLevel, setSpiceLevel] = useState('');
    const [filterStatus,setFilterStatus]= useState('off');

    const handleCostChange = (e) => {
        setCostLevel(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficultyLevel(e.target.value);
    };

    const handleSpiceLevelChange = (e) => {
        setSpiceLevel(e.target.value);
    };
    const handleFilterStatusChange = (e) => {
        setFilterStatus("on");
    };


    return (
        <>
            <div className="filter-container">
                <form>
                    <label htmlFor="spice_level">Spicy Level:</label>
                    &nbsp;
                    <select id="spice_level" name="spice_level" value={spiceLevel} onChange={handleSpiceLevelChange}>
                        <option value="">Select All</option>
                        <option value="NONE">None</option>
                        <option value="MILD">Mild</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="SPICY">Spicy</option>

                    </select>

                    &nbsp; &nbsp; &nbsp;

                    <label htmlFor="difficulty">Difficult Level:</label>
                    &nbsp;
                    <select id="difficulty" name="difficulty" value={difficultyLevel} onChange={handleDifficultyChange}>
                        <option value="">Select All</option>
                        <option value="EASY">Easy</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="HIGH">High</option>
                        {/* Add more options as needed */}
                    </select>

                    &nbsp; &nbsp; &nbsp;

                    <label htmlFor="cost">Cost Level:</label>
                    &nbsp;
                    <select id="cost" name="cost" value={costLevel} onChange={handleCostChange}>
                        <option value="">Select All</option>
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="PRICEY">Pricey</option>
                        {/* Add more options as needed */}
                    </select>
                    &nbsp; &nbsp; &nbsp;
                    <button className='filterButton' id="apply-filters" type="button" onClick={() => {
                        applyFilters(costLevel, difficultyLevel, spiceLevel);
                        setFilterStatus("on");}}>
                        Apply Filters
                    </button>
                    <br />
                </form>
            </div>
        </>

    );

};

export const RecipeList = ({ recipes }) => {
    return (
        <>



            < div className="wrapper" >

                {recipes.length === 0 ? (
                    <p>No recipes for this filter combination found</p>
                ) : (
                    recipes.map((recipe) => (
                        <>
    
                            <Card
                                key={recipe.id}
                                img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                                title={recipe.name}
                                description="Take your boring salads up a knotch. This recipe is perfect for lunch and only contains 5 ingredients!"
                                id={recipe.id}
                            />
                        </>
                    ))
                )}
            </div>

        </>
    );
};



export default function RecipeFilterApp({ setFilterStatus }) {

    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [filterButtonStatus, setFilterButtonStatus] = useState("off");
    const applyFilters = (costLevel, difficultyLevel, spiceLevel) => {

        fetch(`http://localhost:8080/api/recipes`)
            .then(response => response.json())
            .then(data => {
                let newdata = data.filter(recipe => {
                    return recipe["cost"].includes(costLevel) && recipe["difficulty_level"].includes(difficultyLevel) && recipe["spice_level"].includes(spiceLevel)

                });

                setFilteredRecipes(newdata);
                setFilterButtonStatus('on');
                setFilterStatus('on');


            })

    }

    return (
        <>

            <div>
                <RecipeFilter applyFilters={applyFilters} />
                {filterButtonStatus === "on" && <RecipeList recipes={filteredRecipes} />}
            </div>
        </>

    )
};








