
import './Favourite.css';
import React, { useContext, useEffect, useState } from "react";
import { Card } from "../recipeCards/recipeCard";
import AuthContext from "../AuthContext/AuthContext";
import { GetUserFavourRecipes } from '../../utils';



const Favourites = () => {


    const [recipes, setRecipes] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const context = useContext(AuthContext)
    let user = context.user;
    let personID = user?.id ?? null;

    useEffect(() => {
        const fetchData = async () => {
            const result = await GetUserFavourRecipes(currentPage, 5, personID);
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
                {user ? (
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
                                        title={recipe.name}
                                        id={recipe.id}
                                        style={recipe.style}
                                        time_to_cook={recipe.time_to_cook}
                                        serving={recipe.serving}
                                        cuisine={recipe.cuisine}
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
                        <br />



                    </>
                )
                    : (
                        <>
                            <div className='favourite-container'>
                                <header className="header">
                                    <div className='favourite-title-container'>
                                        <div className="Title">Need to login again to display Favourites</div>
                                    </div>
                                </header>
                            </div>

                            <div className="Divider"></div>
                            <div><img className="photo" src={require('../../Resources/genericKitchen.png')} alt="Kitchen" /></div>
                            <br />
                        </>
                    )}

            </div>
        </>
    )

};





export default Favourites;