import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import {GetRecipesPaginated} from "../utils";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function RecipeCardList() {
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    let data = GetRecipesPaginated(currentPage, 10);
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
    };


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
<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                Previous Page
            </button>
            <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                Next Page
            </button>
    </div>;
}

function Card(props) {
    let link = "/recipes/"+props.id;
    return (
        <div className="card">
            <div className="card__body">
                <img src={props.img} class="card__image"/>
                <h2 className="card__title">{props.title}</h2>
                <p className="card__description">{props.description}</p>
            </div>
            <Link to = {link}>
            <button className="card__btn">View Recipe</button>
            </Link>
        </div>
    );
}

export default RecipeCardList;
