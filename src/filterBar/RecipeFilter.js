import React, { useEffect, useState } from 'react';

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
                    <label htmlFor="spice_level">Spicy Level:</label>
                    &nbsp;
                    <select id="spice_level" name="spice_level" value={spiceType} onChange={handleSpiceLevelChange}>
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
                    <select id="cost" name="cost" value={costType} onChange={handleCostChange}>
                        <option value="">Select All</option>
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="PRICEY">Pricey</option>
                        {/* Add more options as needed */}
                    </select>
                    &nbsp; &nbsp; &nbsp;
                    <button className='filterButton' id="apply-filters" type="button" onClick={() => {
                        const filterArray = {costLevel: costType, difficultyLevel, spiceLevel: spiceType};
                        applyFilters(filterArray);}}>
                        Apply Filters
                    </button>
                    <br />
                </form>
            </div>
        </>

    );

};