import { Link, useNavigate } from "react-router-dom";
import TextFileReader from './TextFileReader';
import './whoWeAre.css';
// import {View, Text} from 'react-native';
import React from "react";
const WhoWeAre = (props) => {
    const navigate = useNavigate()

    const whoWeAreText = "Welcome to NERD Recipes where passion meets practicality in the world of culinary delights! <br /> We are a small but dedicated team committed to revolutionizing your cooking experience. <br /> At the heart of our endeavor is a recipe website that goes beyond the ordinary, championing ad-free and affordable culinary inspiration while providing unparalleled recipe searching capabilities.<br /> Who are we? <br /> We're food enthusiasts with a mission to make cooking accessible, enjoyable, and budget-friendly for everyone. In a world cluttered with distractions, we believe in a seamless and ad-free recipe browsing experience that lets you focus on what truly matters the joy of creating delicious meals. <br /> Our commitment to affordability is embedded in every aspect of our platform. From cost-effective ingredients to budget-friendly meal plans, we empower you to savor the flavors without breaking the bank. We understand the importance of a diverse and accessible recipe collection, and we take pride in curating a vast array of dishes that cater to different tastes, preferences, and dietary needs. <br /> What sets us apart? <br />It is our dedication to intuitive recipe searching. Our website is designed to be your culinary companion, offering powerful search capabilities that simplify the quest for the perfect recipe. Whether you're a seasoned chef or a kitchen novice, our user-friendly interface ensures that you find exactly what you're looking for, effortlessly. <br />Join us in embracing a community where cooking is a delightful adventure, unburdened by intrusive ads and excessive costs. At NERD Recipe, we're not just offering recipes; we're inviting you to be part of a movement that values affordable, ad-free, and exceptional culinary experiences. Let's cook up something extraordinary together!"

    return (
        <>
            <h1 className="Title">Who we are</h1>

            <div className="Divider" style={{width: 1850, height: 0, boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', border: '2px #E6E6E6 solid'}}></div>

            <div className="TextContainer">
                <div className="TextBody"><br />Welcome to NERD Recipes where passion meets practicality in the world of culinary delights!
                    We are a small but dedicated team committed to revolutionizing your cooking experience.
                    At the heart of our endeavor is a recipe website that goes beyond the ordinary, championing ad-free and affordable culinary inspiration while providing unparalleled recipe searching capabilities.<br /> <br /> <br />
                    Who we are? <br />
                    We're food enthusiasts with a mission to make cooking accessible, enjoyable, and budget-friendly for everyone. In a world cluttered with distractions, we believe in a seamless and ad-free recipe browsing experience that lets you focus on what truly matters the joy of creating delicious meals. <br />
                    Our commitment to affordability is embedded in every aspect of our platform. From cost-effective ingredients to budget-friendly meal plans, we empower you to savor the flavors without breaking the bank. We understand the importance of a diverse and accessible recipe collection, and we take pride in curating a vast array of dishes that cater to different tastes, preferences, and dietary needs. <br /> <br /><br />
                    What sets us apart? <br />
                    It is our dedication to intuitive recipe searching. Our website is designed to be your culinary companion, offering powerful search capabilities that simplify the quest for the perfect recipe. Whether you're a seasoned chef or a kitchen novice, our user-friendly interface ensures that you find exactly what you're looking for, effortlessly. <br /><br /><br />
                    Join us in embracing a community where cooking is a delightful adventure, unburdened by intrusive ads and excessive costs. At NERD Recipe, we're not just offering recipes; we're inviting you to be part of a movement that values affordable, ad-free, and exceptional culinary experiences. Let's cook up something extraordinary together!<br /><br /><br /></div>

            </div>

            <div><img className= "photo" src={require('.//cooker.png')} alt="Cooker" /></div>


        </>
    );
}

export default WhoWeAre;