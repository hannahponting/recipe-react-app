import React, { useEffect, useState } from 'react';
import { Card } from "../recipeCards/recipeCard"
import './RecipeFilter.css';

export const RecipeFilter = ({ applyFilters }) => {
    const [costLevel, setCostLevel] = useState('');
    const [difficultyLevel, setDifficultyLevel] = useState('');
    const [spiceLevel, setSpiceLevel] = useState('');
    const [filterStatus,setFilterStatus]= useState('off');
    //const [currentPageForFilter, setCurrentPageForFilter] = useState(2);


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
                    <label className='label-edits' htmlFor="spice_level">Spiciness</label>
                    &nbsp;&nbsp;
                    <select id="spice_level" name="spice_level" value={spiceLevel} onChange={handleSpiceLevelChange}>
                        <option value="">Select All</option>
                        <option value="NONE">None</option>
                        <option value="MILD">Mild</option>
                        <option value="MEDIUM">Medium</option>
                        <option value="SPICY">Spicy</option>

                    </select>

                    &nbsp; &nbsp; &nbsp;

                    <label className='label-edits' htmlFor="difficulty">Difficulty</label>
                    &nbsp;&nbsp;
                    <select className='filter-box' id="difficulty" name="difficulty" value={difficultyLevel} onChange={handleDifficultyChange}>
                        <option value="">Select All</option>
                        <option value="EASY">Easy</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="HIGH">High</option>
                        {/* Add more options as needed */}
                    </select>

                    &nbsp; &nbsp; &nbsp;

                    <label className='label-edits' htmlFor="cost">Cost</label>
                    &nbsp;&nbsp;
                    <select id="cost" name="cost" value={costLevel} onChange={handleCostChange}>
                        <option value="">Select All</option>
                        <option value="LOW">Low</option>
                        <option value="MODERATE">Moderate</option>
                        <option value="PRICEY">Pricey</option>
                        {/* Add more options as needed */}
                    </select>
                    &nbsp; &nbsp; &nbsp;
                    <button className='filterButton' id="apply-filters" type="button" onClick={() => {
                        applyFilters(costLevel, difficultyLevel, spiceLevel,1);
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
//
//
// export function applyFilters (costType,difficultyLevel, spiceLevel,currentPageForFilter) {
//
//     const pageSize = 10;
//     let apiUrl = "";
//
//     if (costType === "" && difficultyLevel === "" && spiceLevel === "")
//         apiUrl = `http://localhost:8080/api/recipes/search/custom/page/${currentPageForFilter}/${pageSize}`
//     else
//         apiUrl =
//             `http://localhost:8080/api/recipes/search/custom/page/${currentPageForFilter}/${pageSize}?query=difficultyLevel%3D${difficultyLevel}%26costType%3D${costType}%26spiceType%3D${spiceLevel}`;
//
//
//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//
//             setFilteredRecipes(data.content);
//             setFilterButtonStatus('on');
//             setFilterStatus('on');
//             setTotalPageForFilter(data.totalPages)
//             setCostType(costType);
//             setDifficultyLevel(difficultyLevel);
//             setSpiceLevel(spiceLevel);
//             // setCurrentPageForFilter(currentPageForFilter);
//
//         })
//         .catch(error => {
//             // Handle errors if any occurred during the fetch
//             console.error("Error fetching data:", error);
//         });
//
// }
//




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








