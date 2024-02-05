import { Link, useNavigate } from "react-router-dom";
import TextFileReader from './TextFileReader';
import './whoWeAre.css';
// import {View, Text} from 'react-native';
import React, {useEffect, useState} from "react";
import {GetRecipesPaginated} from "./utils";
const Favourites = (props) => {
    const navigate = useNavigate()

    const whoWeAreText = "Welcome to NERD Recipes where passion meets practicality in the world of culinary delights! <br /> We are a small but dedicated team committed to revolutionizing your cooking experience. <br /> At the heart of our endeavor is a recipe website that goes beyond the ordinary, championing ad-free and affordable culinary inspiration while providing unparalleled recipe searching capabilities.<br /> Who are we? <br /> We're food enthusiasts with a mission to make cooking accessible, enjoyable, and budget-friendly for everyone. In a world cluttered with distractions, we believe in a seamless and ad-free recipe browsing experience that lets you focus on what truly matters the joy of creating delicious meals. <br /> Our commitment to affordability is embedded in every aspect of our platform. From cost-effective ingredients to budget-friendly meal plans, we empower you to savor the flavors without breaking the bank. We understand the importance of a diverse and accessible recipe collection, and we take pride in curating a vast array of dishes that cater to different tastes, preferences, and dietary needs. <br /> What sets us apart? <br />It is our dedication to intuitive recipe searching. Our website is designed to be your culinary companion, offering powerful search capabilities that simplify the quest for the perfect recipe. Whether you're a seasoned chef or a kitchen novice, our user-friendly interface ensures that you find exactly what you're looking for, effortlessly. <br />Join us in embracing a community where cooking is a delightful adventure, unburdened by intrusive ads and excessive costs. At NERD Recipe, we're not just offering recipes; we're inviting you to be part of a movement that values affordable, ad-free, and exceptional culinary experiences. Let's cook up something extraordinary together!"

    return (
        <>
            <header className="header">
                <div className="Title">Want to display my favourite recipes here</div>
            </header>

            <div className="Divider"></div>

            <div>
                <img className= "photo" src={require('.//cooker.png')} alt="Cooker" />
            </div>

        </>
    );
}

export default Favourites;




function RenderUserFavorRecipes() {

    const navigate = useNavigate();
    const apiUrl ='http://localhost:8080/api/recipes/favourite/2/page/1/10'

    const handleSearch = () => {
        navigate(apiUrl)
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
    return {handleSearch, recipes, currentPage, totalPages, handlePageChange};
}
