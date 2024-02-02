import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"

export const RecipeFilter = ({ applyFilters }) => {
    const [costLevel, setCostLevel] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [spiceLevel, setSpiceLevel] = useState('');
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
                        applyFilters(costLevel, difficultyLevel, spiceLevel);}}>
                        Apply Filters
                    </button>
                    <br />
                </form>
            </div>
        </>

    );

};