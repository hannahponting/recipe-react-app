import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import { GetRecipesPaginated } from "../utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import {RecipeFilter} from "../filterBar/RecipeFilter";


function RecipeCardList() {

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
            const result = await GetRecipesPaginated(currentPage, 10, query);
            setRecipes(result.recipes);
            setTotalPages(result.totalPages);
        };
    
        fetchData();
    }, [currentPage, query]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);

        }

    </>;
}

    const applyFilters = (costType,difficultyLevel, spiceLevel) => {

        if (costType===""&&difficultyLevel===""&&spiceLevel==="")
           {setQuery("");
           setCurrentPage(1);
        }
        else
        {
        let queryParams = "";
    
        if (costType !== "") {
            queryParams += `costType=${costType}`;
        }
    
        if (difficultyLevel !== "") {
            queryParams += `${queryParams.length > 0 ? '&' : ''}difficultyLevel=${difficultyLevel}`;
        }
    
        if (spiceLevel !== "") {
            queryParams += `${queryParams.length > 0 ? '&' : ''}spiceType=${spiceLevel}`;
        }
    
        setQuery("?query="+encodeURIComponent(queryParams));
        setCurrentPage(1);
    }
};


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

        <div className="Divider"></div>

{recipes.length > 0 ? (
    <div className="wrapper">
        {recipes.map((recipe) => (
            <Card
                key={recipe.id}
                img={`http://localhost:8080/api/recipes/image/${recipe.id}`}
                title={recipe.name}
                description="Take your boring salads up a notch. This recipe is perfect for lunch and only contains 5 ingredients!"
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
</>
;}



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


