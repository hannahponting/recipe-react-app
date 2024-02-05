import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"
import './RecipeFilter.css';


export const RecipeFilter = ({ applyFilters}) => {
    const [costType, setCostType] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [spiceType, setSpiceType] = useState('');
    const handleCostChange = (e) => {
        setCostType(e.target.value);
    };

    const handleDifficultyChange = (e) => {
        setDifficultyLevel(e.target.value);
    };

    const handleSpiceLevelChange = (e) => {
        setSpiceType(e.target.value);
    };


    return (
        <>
            <div className="filter-container">
                <form>

                    <h3 htmlFor="spice_level">Spicy Level:</h3>
                    &nbsp;
                    <label><input type='radio' name="spice_level" value="NONE" onChange={handleSpiceLevelChange}></input>None</label>
                   <label><input type='radio' name="spice_level" value="MILD" onChange={handleSpiceLevelChange}></input>Mild</label>
                   <label><input type='radio' name="spice_level" value="MEDIUM" onChange={handleSpiceLevelChange}></input>Medium</label>
                   <label><input type='radio' name="spice_level" value="SPICY" onChange={handleSpiceLevelChange}></input>Spicey</label>
                   <label><input type='radio' name="spice_level" value="" onChange={handleSpiceLevelChange}></input>Any</label>

                    &nbsp; &nbsp; &nbsp;

                    <h3 className='label-edits' htmlFor="difficulty">Difficulty</h3>
                    &nbsp;&nbsp;
                    <label><input type='radio' name="difficulty" value="EASY" onChange={handleDifficultyChange}></input>Easy</label>
                    <label><input type='radio' name="difficulty" value="MODERATE" onChange={handleDifficultyChange}></input>Moderate</label>
                    <label><input type='radio' name="difficulty" value="H" onChange={handleDifficultyChange}></input>High</label>
                    <label><input type='radio' name="difficulty" value="" onChange={handleDifficultyChange}></input>Any</label>

                    &nbsp; &nbsp; &nbsp;

                    <h3 htmlFor="cost">Cost Level:</h3>
                    &nbsp;
                    <label><input type='radio' name="cost" value ="LOW" onChange={handleCostChange}></input>Low</label>
                    <label><input type='radio' name="cost" value ="MODERATE" onChange={handleCostChange}></input>Moderate</label>
                    <label><input type='radio' name="cost" value ="PRICEY" onChange={handleCostChange}></input>Pricey</label>
                    <label><input type='radio' name="cost" value ="" onChange={handleCostChange}></input>Any</label>
                    &nbsp; &nbsp; &nbsp;
                    <button className='filterButton' id="apply-filters" type="button" onClick={() => {
                        const filterArray = {costType, difficultyLevel, spiceType};
                        applyFilters(filterArray);}}>
                        Apply Filters
                    </button>
                    <br />
                </form>
            </div>
        </>

    );

};