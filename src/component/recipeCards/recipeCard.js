import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import { GetNewRatingById, GetRecipesPaginated } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { RecipeFilter } from "../FilterBar/RecipeFilter";
import { IngredientFilter } from "../FilterBar/IngredientFilter";
import StarRating from "../StarRating/StarRating";
import LikeButton from "../likeButton/likeButton";

export default RecipeCardList;


function RecipeCardList({filterType, queryEndpoint}, props) {

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }

    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const result = await queryEndpoint(currentPage, 10, query);
            setRecipes(result.recipes);
            setTotalPages(result.totalPages);
        };

        fetchData();
    }, [currentPage, query]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const applyFilters = (filterArray) => {

        if (Array.isArray(filterArray) && filterArray.length > 0) {
            // Case: filterArray is an array of strings
            const queryParams = filterArray.map(value => value).join('&');
            setQuery(`?query=${encodeURIComponent(queryParams)}`);
            setCurrentPage(1);
        } else if (typeof filterArray === 'object' && filterArray !== null) {
            // Case: filterArray is an object with key-value pairs
            if (Object.values(filterArray).every(value => value === '')) {
                setQuery('');
                setCurrentPage(1);
            } else {
                let queryParams = '';
                for (const key in filterArray) {
                    if (filterArray[key] !== '') {
                        queryParams += `${queryParams.length > 0 ? '&' : ''}${key}=${encodeURIComponent(filterArray[key])}`;
                    }
                }
                setQuery(`?query=${encodeURIComponent(queryParams)}`);
                setCurrentPage(1);
            }
        } else {
            // Handle other cases or show an error message
            console.error('Invalid filterArray format');
        }
    }


    return <div className="recipecard-page-container">


        <div>
            <header className="header">
                <div className="recipelist-container">
                    <div className="Title">
                        Recipes
                    </div>
                </div>

                <div>
                    {filterType === 'ingredients' ? (
                        <IngredientFilter applyFilters={applyFilters}/>
                    ) : (
                        <RecipeFilter applyFilters={applyFilters}/>
                    )}
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>

            </header>

            {/* {recipes.map((recipe) => {
        return (
            <Card
                key={recipe.id}
                img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                title={recipe.name}
                description={"Delicious recipe from " + recipe.cuisine.toLowerCase() + " cuisine. It serves up to " + recipe.serving + " people!" }
                id={recipe.id}
            />
        )
    })} */}


        </div>
        <div className="Divider"></div>

        {recipes.length > 0 ? (
            <div className="wrapper">
                {recipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                        title={recipe.name}
                        description={"Delicious recipe from " + recipe.cuisine.toLowerCase() + " cuisine. It serves up to " + recipe.serving + " people!"}
                        id={recipe.id}
                    />
                ))}
            </div>
        ) : (
            <div className="no-recipes-message">
                No recipes to display. Try adjusting your filters or searching with different keywords.
            </div>
        )}

        <div className="button-container">
            <div>
                <button
                    className="buttonEditing"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous Page
                </button>
                &nbsp;&nbsp;&nbsp;
                <button
                    className="buttonEditing"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next Page
                </button>
            </div>
        </div>
    </div>

}


export function Card(props) {
    let link = "/recipes/" + props.id;
    const [starRating, setStarRating] = useState(0);

    const fetchData = async () => {
        try {
            const rating = await Promise.resolve(GetNewRatingById(props.id));
            setStarRating(rating);
        } catch (error) {
            console.error('Error fetching rating:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.id]);

    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} className="card__image"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
                <StarRating id='stars' stars={starRating}></StarRating>
            </div>
            <Link to={link}>
                <button className="card__btn">View Recipe</button>
            </Link>
            <LikeButton isUserLoggedIn={props.isLoggedIn} recipeId={props.id} uuId={props.uuId}> </LikeButton>
        </div>
    );
}






