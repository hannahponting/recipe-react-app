import { Link, useNavigate } from "react-router-dom";
import TextFileReader from './TextFileReader';
import './whoWeAre.css';
// import {View, Text} from 'react-native';
import React, {useEffect, useState} from "react";
import {GetRecipesPaginated} from "./utils";
import {Card} from "./recipeCards/recipeCard";
const Favourites = (props) => {


    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [query, setQuery] = useState("");
    const [totalPages, setTotalPages] = useState(1);

    const userId=2;

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetUserFavourRecipes(1, 5, userId);
            console.log(result)
            setRecipes(result.recipes);
            setTotalPages(result.totalPages);
        };

        fetchData();
    }, [currentPage]);

    const handlePageChange = (newPage) => {
        if (newPage > 0 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };


    return (
        <>
        <div>
        {props.isLoggedIn ? (
             <>
             <header className="header">
                 <div className="Title">Want to display my favourite recipes here</div>
             </header>
 
             <div className="Divider"></div>
 
     
             <div><img className= "photo" src={require('.//Resources/genericKitchen.png')} alt="Cooker" /></div>
         </>
            ) : (
        <>
            <header className="header">
                <div className="Title">Please log in to see your favourite recipes</div>
            </header>

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
                    No recipes to display.
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
    )}

    </div>
    </>
    )
            
};


export async function GetUserFavourRecipes(pageNum, pageSize, userId) {
    const urlApi = `http://localhost:8080/api/recipes/favourite/${userId}/page/${pageNum}/${pageSize}`
    const response = await fetch(urlApi);
    const body = await response.json()
    const data = ({recipes: body.content, isLoading: false, totalPages: body.totalPages})
    return data;
}


export default Favourites;
