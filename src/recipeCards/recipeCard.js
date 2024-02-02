import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import { GetRecipesPaginated } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeFilterApp, {RecipeFilter} from "../filterBar/RecipeFilter";

import {RecipeList} from "../filterBar/RecipeFilter";


function RecipeCardList() {

    const {searchTerm, setSearchTerm, handleSearch, recipes,
        currentPage, totalPages, handlePageChange} = ExtractedSearchApp();
    const {
        filterStatus, filteredRecipes, filterButtonStatus, totalPageForFilter,
        currentPageForFilter, applyFilters, handlePageChangeForFilter} = ExtractedFileterApp();

    return <>

            <header className="header">
                 <div className="Title">Recipes</div>
                 <RecipeFilter applyFilters={applyFilters}/>
                {SearchBar(searchTerm, setSearchTerm, handleSearch)}
            </header>

        <div className="Divider"></div>

        {filterStatus === "off" ?
            <>
                {getRecipeCards(recipes)}
                {getPage(handlePageChange, currentPage, totalPages)}
            </>
            :
            <>
                {filterButtonStatus === "on" && <RecipeList recipes={filteredRecipes}/>}
                {getPageForFilter(handlePageChangeForFilter, currentPageForFilter, totalPageForFilter)}
            </>

        }

    </>;
}




function ExtractedFileterApp() {
    const [filterStatus, setFilterStatus] = useState("off");
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [filterButtonStatus, setFilterButtonStatus] = useState("off");
    const [totalPageForFilter, setTotalPageForFilter] = useState(1);
    const [currentPageForFilter, setCurrentPageForFilter] = useState(1);
    const [costType, setCostType] = useState("Select All");
    const [difficultyLevel, setDifficultyLevel] = useState("Select All");
    const [spiceLevel, setSpiceLevel] = useState("Select All");

    console.log("currentPageForFilter not in handle page" + currentPageForFilter)
    const handlePageChangeForFilter = (newPage) => {
        if (newPage > 0 && newPage <= totalPageForFilter) {
            setCurrentPageForFilter(newPage)
        }

        applyFilters(costType, difficultyLevel, spiceLevel, newPage);

    };

    const applyFilters = (costType, difficultyLevel, spiceLevel, currentPageForFilter) => {

        const pageSize = 10;
        let apiUrl = "";

        if (costType === "" && difficultyLevel === "" && spiceLevel === "")
            apiUrl = `http://localhost:8080/api/recipes/search/custom/page/${currentPageForFilter}/${pageSize}`
        else
            apiUrl =
                `http://localhost:8080/api/recipes/search/custom/page/${currentPageForFilter}/${pageSize}?query=difficultyLevel%3D${difficultyLevel}%26costType%3D${costType}%26spiceType%3D${spiceLevel}`;


        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {

                setFilteredRecipes(data.content);
                setFilterButtonStatus('on');
                setFilterStatus('on');
                setTotalPageForFilter(data.totalPages)
                setCostType(costType);
                setDifficultyLevel(difficultyLevel);
                setSpiceLevel(spiceLevel);


            })
            .catch(error => {
                // Handle errors if any occurred during the fetch
                console.error("Error fetching data:", error);
            });

    }
    return {
        filterStatus,
        filteredRecipes,
        filterButtonStatus,
        totalPageForFilter,
        currentPageForFilter,
        applyFilters,
        handlePageChangeForFilter
    };
}


function getPageForFilter(handlePageChangeForFilter, currentPageForFilter, totalPageForFilter) {
    return <div className="button-container">
        <div>
            <button className="buttonEditing" onClick={() => {
                handlePageChangeForFilter(currentPageForFilter - 1)
            }}
                    disabled={currentPageForFilter === 1}>
                Previous Page
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="buttonEditing" onClick={() => {
                handlePageChangeForFilter(currentPageForFilter + 1);
            }}
                    disabled={currentPageForFilter === totalPageForFilter}>
                Next Page
            </button>
        </div>
    </div>;
}



function SearchBar(searchTerm, setSearchTerm, handleSearch) {
    return <div className="search-bar">
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
    </div>;
}




function ExtractedSearchApp() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let data = GetRecipesPaginated(currentPage, 10);

    // console.log(data)
    const fetchedRecipes = data.recipes;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        setRecipes(fetchedRecipes);
    }, [currentPage, data]);
    useEffect(() => {
        setTotalPages(data.totalPages);
    }, [data]);
    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
        ;

    };
    return {searchTerm, setSearchTerm, handleSearch, recipes, currentPage, totalPages, handlePageChange};
}



function getPage(handlePageChange, currentPage, totalPages) {
    return <div className="button-container">
        <div>
            <button className="buttonEditing" onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}>
                Previous Page
            </button>
            &nbsp;&nbsp;&nbsp;
            <button className="buttonEditing" onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}>
                Next Page
            </button>
        </div>
        

<<<<<<< HEAD
        

   
        <div className="Divider" ></div>


function getRecipeCards(recipes) {
    return <div className="wrapper">

                {recipes.map((recipe) => {
                    return (
                        <Card
                            key={recipe.id}
                            img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                            title={recipe.name}
                            description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
                            id={recipe.id}
                        />
                    )
                })}

            </div>


            <div className="button-container">
                <div>
                    <button className="buttonEditing" onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}>
                        Previous Page
                    </button>
                    &nbsp;&nbsp;&nbsp;
                    <button className="buttonEditing" onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}>
                        Next Page
                    </button>
                </div>

            </div>
            </>


            :<div>
                {/*<RecipeFilterApp setFilterStatus={setFilterStatus}></RecipeFilterApp>*/}

                {filterButtonStatus === "on" && <RecipeList recipes={filteredRecipes} />}
            </div>}
        </div>

    </>;
=======
    </div>;
>>>>>>> ac6025bdf987a1dab8680967bf30ace7a91b601d
}



function getRecipeCards(recipes) {
    return <div className="wrapper">

        {recipes.map((recipe) => {
            return (
                <Card
                    key={recipe.id}
                    img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                    title={recipe.name}
                    description="Take your boring salads up a knotch. This recipe is perfect for lunch
      and only contains 5 ingredients!"
                    id={recipe.id}
                />
            )
        })}

    </div>;
}


export function Card(props) {
    let link = "/recipes/" + props.id;
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <Link to={link}>
                <button className="card__btn">View Recipe</button>
            </Link>
        </div>
    );
}




export default RecipeCardList;


