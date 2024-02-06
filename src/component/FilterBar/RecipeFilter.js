import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"
import './RecipeFilter.css';


export const RecipeFilter = ({ applyFilters }) => {
    const [filterValues, setFilterValues] = useState({
        costType: '',
        difficultyLevel: '',
        spiceType: '',
        mealType: '',
        servingNo: '',
        cuisineType: '',
        cookingMinutes: ''
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
            cuisineType: {value: filterValues.cuisineType, comparison: '='},
            servingNo: {value: filterValues.servingNo, comparison: '>='},
            cookingMinutes: {value: filterValues.cookingMinutes, comparison: '<='}
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

                <h3 htmlFor="cuisine">Cuisine:</h3>
                <input type='radio' name="cuisineType" value="AMERICAN" onChange={handleInputChange} /> American
                <input type='radio' name="cuisineType" value="ASIAN" onChange={handleInputChange} /> Asian
                <input type='radio' name="cuisineType" value="BRITISH" onChange={handleInputChange} /> British
                <input type='radio' name="cuisineType" value="FRENCH" onChange={handleInputChange} /> French
                <input type='radio' name="cuisineType" value="INDIAN" onChange={handleInputChange} /> Indian
                <input type='radio' name="cuisineType" value="INTERNATIONAL" onChange={handleInputChange} /> International
                <input type='radio' name="cuisineType" value="ITALIAN" onChange={handleInputChange} /> Italian
                <input type='radio' name="cuisineType" value="MEDITERRANEAN" onChange={handleInputChange} /> Mediterranean
                <input type='radio' name="cuisineType" value="MEXICAN" onChange={handleInputChange} /> Mexican
                <input type='radio' name="cuisineType" value="SPANISH" onChange={handleInputChange} /> Spanish
                <input type='radio' name="cuisineType" value="" onChange={handleInputChange} /> Any

                <h3 htmlFor="meal">Minimum Servings:</h3>
                <input type='number' name="servingNo" value={filterValues.servingNo} onChange={handleInputChange} />

                <h3 htmlFor="time">Minutes to Prepare:</h3>
                <input type='number' name="cookingMinutes" value={filterValues.cookingMinutes} onChange={handleInputChange} />

                <button className='filterButton' id="apply-filters" type="button" onClick={applyFiltersHandler}>
                    Apply Filters
                </button>
            </form>
        </div>
    );
};