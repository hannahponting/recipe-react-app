
import './Favourite.css';
import React, { useEffect, useState } from "react";
import { Card } from "../recipeCards/recipeCard";
const Favourites = (props) => {


    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetUserFavourRecipes(1, 5, props.uuID);
            setRecipes(result.recipes);
            setTotalPages(result.totalPages);
        };
        console.log("print out recipes below")
        console.log(recipes)

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

                        <div className='favourite-container'>
                            <header className="header">
                                <div className='favourite-title-container'>
                                    <div className="Title">Find your favourite recipes here</div>
                                </div>



                            </header>
                        </div>


                        <div className="Divider"></div>


                        {recipes?.length > 0 ? (
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
                )
                    : (
                        <>
                            <header className="header">
                                <div className="Title">Want to display my favourite recipes here</div>
                            </header>

                            <div className="Divider"></div>


                            {/*<div><img className= "photo" src={require('.//cooker.png')} alt="Cooker" /></div>*/}
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
    const data = ({ recipes: body.content, isLoading: false, totalPages: body.totalPages })
    return data;
}


export default Favourites;