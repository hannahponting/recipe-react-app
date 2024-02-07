import * as React from "https://cdn.skypack.dev/react@17.0.1";
import "./recipeCard.css";
import { GetNewRatingById, GetRecipesPaginated, GetIngredientsPaginated, GetRatingById, GetRecipeImage } from "../../utils";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState , useRef} from "react";
import { RecipeFilter } from "../FilterBar/RecipeFilter";
import { IngredientFilter } from "../FilterBar/IngredientFilter";
import StarRating from "../StarRating/StarRating";
import LikeButton from "../likeButton/likeButton";
import Sidebar from "../Sidebar/Sidebar";


export default RecipeCardList;


function RecipeCardList(props) {



    const Sidebarstyles = {
        display :  props.sidebarVisible? "block": "none",


      }


    
      
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
    const handleSearch = () => {
        navigate(`/recipes/search?keyword=${encodeURIComponent(searchTerm)}`)
    }
    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [totalPages, setTotalPages] = useState(1);
    const [filterType, setFilterType] = useState("default");
    const [pageSize, setPageSize] = useState();
    const queryEndpointRef = useRef(GetRecipesPaginated);

    useEffect(() => {
        const fetchData = async () => {
            const result = await queryEndpointRef.current(currentPage, pageSize, query);
            setRecipes(result.recipes);
            setTotalPages(result.totalPages);
        };

        if(pageSize)fetchData();
    }, [currentPage, query, filterType, pageSize]);

    useEffect(() => {
        getPageSize();
        console.log("pageSize: " + pageSize)
    }, [pageSize])

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const toggleFilter = () => {
        if (filterType === "default") {
          // Update the ref without calling the function
          queryEndpointRef.current = GetIngredientsPaginated;
          setFilterType("ingredients");
          setCurrentPage(1);
          setQuery("");
        } else {
          // Update the ref without calling the function
          queryEndpointRef.current = GetRecipesPaginated;
          setFilterType("default");
          setCurrentPage(1);
          setQuery("");
        }
      };
      function getPageSize() {
        console.log("get page size ran");
        const windowWidth = window.innerWidth;
        const imageWidth = 280;
        const cardsPerRow = Math.floor(windowWidth / imageWidth); 
        setPageSize(cardsPerRow * 2)};
    

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
                    const { value, comparison } = filterArray[key];
                    if (value !== '') {
                        queryParams += `${queryParams.length > 0 ? '&' : ''}${key}${comparison}${encodeURIComponent(value)}`;
                    }
                }
                setQuery(`?query=${encodeURIComponent(queryParams)}`)
                setCurrentPage(1);
            }
        } else {
            // Handle other cases or show an error message
            console.error('Invalid filterArray format');
        }
    }


    return <div className="recipecard-page-container" 
    
    >
 <Sidebar
        applyFilters = {applyFilters}
        closeSidebar = {props.closeSidebar}
        handleMouseEnter={props.handleMouseEnter}
        handleMouseLeave={props.handleMouseLeave}
        style= {Sidebarstyles}
        ></Sidebar>

        <div>
            <header className="header" style={props.style}>
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
                <div>
                    <button className="filter-button" onClick={props.moveSidebar}>Filters</button>
                </div>
                <div className="header-search-container" style={props.style}> 
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button onClick={handleSearch}>Search</button>
                </div>
                </div>

            </header>


        </div>
        <div>
      <button onClick={(toggleFilter)}>Toggle Filter</button>
    </div>
        <div className="Divider"></div>

        {recipes?.length > 0 ? (
            <div className="wrapper">
                {recipes.map((recipe) => (
                    <Card
                        key={recipe.id}
                        title={recipe.name}
                        description={"Delicious recipe from " + recipe.cuisine.toLowerCase() + " cuisine. It serves up to " + recipe.serving + " people!"}
                        id={recipe.id}
                        
                        style={props.style}
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
            const rating = await GetRatingById(props.id).then((rating) => {setStarRating(rating)})
        } catch (error) {
            console.error('Error fetching rating:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [props.id]);


    const [imageUrl, setImageUrl] = useState(null);

    useEffect(() => {
        async function fetchImage() {
            try {
                const imageUrl = await GetRecipeImage(props.id);
                setImageUrl(imageUrl);
            } catch (error) {
                console.error('Error fetching image:', error);
            }
        }

        fetchImage();
    }, [props.id]);

    return (
        <div style={props.style} className="card">
            <div className="card__body">
                <img src={imageUrl} className="card__image"/>
                <h2 className="card__title">{props.title}</h2>
                <StarRating id='stars' stars={starRating}></StarRating>
                <p className="card__description">{props.description}</p>
            </div>
            <Link to={link}>
                <button className="card__btn">View Recipe</button>
            </Link>
            <LikeButton  recipeId={props.id}> </LikeButton>
        </div>
    );
}
