import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"
import './RecipeFilter.css';


export const RecipeFilter = ({ applyFilters }) => {
    const [filterValues, setFilterValues] = useState({
        costType: '',
        difficultyLevel: '',
        spiceType: '',
        mealType: '',
        servingNo: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFilterValues(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const applyFiltersHandler = () => {
        const filterArray = {
            costType: { value: filterValues.costType, comparison: '=' },
            difficultyLevel: { value: filterValues.difficultyLevel, comparison: '=' },
            spiceType: { value: filterValues.spiceType, comparison: '=' },
            mealType: { value: filterValues.mealType, comparison: '=' },
            servingNo: {value: filterValues.servingNo, comparison: '>='}
        };
        applyFilters(filterArray);
    };

    return (
        <div className="filter-container">
            <form>
                <h3 htmlFor="spice_level">Spice Level:</h3>
                <input type='radio' name="spiceType" value="NONE" onChange={handleInputChange} /> None
                <input type='radio' name="spiceType" value="MILD" onChange={handleInputChange} /> Mild
                <input type='radio' name="spiceType" value="MEDIUM" onChange={handleInputChange} /> Medium
                <input type='radio' name="spiceType" value="SPICY" onChange={handleInputChange} /> Spicy
                <input type='radio' name="spiceType" value="" onChange={handleInputChange} /> Any

                <h3 className='label-edits' htmlFor="difficulty">Difficulty:</h3>
                <input type='radio' name="difficultyLevel" value="EASY" onChange={handleInputChange} /> Easy
                <input type='radio' name="difficultyLevel" value="MODERATE" onChange={handleInputChange} /> Moderate
                <input type='radio' name="difficultyLevel" value="HIGH" onChange={handleInputChange} /> High
                <input type='radio' name="difficultyLevel" value="" onChange={handleInputChange} /> Any

                <h3 htmlFor="cost">Cost Level:</h3>
                <input type='radio' name="costType" value="LOW" onChange={handleInputChange} /> Low
                <input type='radio' name="costType" value="MODERATE" onChange={handleInputChange} /> Moderate
                <input type='radio' name="costType" value="PRICEY" onChange={handleInputChange} /> Pricey
                <input type='radio' name="costType" value="" onChange={handleInputChange} /> Any

                <h3 htmlFor="meal">Meal:</h3>
                <input type='radio' name="mealType" value="BREAKFAST" onChange={handleInputChange} /> Breakfast
                <input type='radio' name="mealType" value="LUNCH" onChange={handleInputChange} /> Lunch
                <input type='radio' name="mealType" value="DINNER" onChange={handleInputChange} /> Dinner
                <input type='radio' name="mealType" value="" onChange={handleInputChange} /> Any

                <h3 htmlFor="meal">Minimum servings:</h3>
                <input type='number' name="servingNo" value={filterValues.servingNo} onChange={handleInputChange} />

                <button className='filterButton' id="apply-filters" type="button" onClick={applyFiltersHandler}>
                    Apply Filters
                </button>
            </form>
        </div>
    );
};