import './WhoWeAre.css';
// import {View, Text} from 'react-native';
import React from "react";
const WhoWeAre = () => {


    return (
        <div className="whoweare-page-container">
            <header className="header">
                <div className="whoweare-title-container">
                    <div className="Title">
                        Who we are
                        </div>
                </div>

            </header>

            <div className="Divider"></div>

            <div className="TextContainer">
                <div className="TextBody"><br />Welcome to NERD Recipes where passion meets practicality in the world of culinary delights!
                    We are a small but dedicated team committed to revolutionizing your cooking experience.
                    At the heart of our endeavor is a recipe website that goes beyond the ordinary, championing ad-free and affordable culinary inspiration while providing unparalleled recipe searching capabilities.<br /> <br /> <br />
                    <span className='span-header'>Who we are?</span> <br />
                    We're food enthusiasts with a mission to make cooking accessible, enjoyable, and budget-friendly for everyone. In a world cluttered with distractions, we believe in a seamless and ad-free recipe browsing experience that lets you focus on what truly matters the joy of creating delicious meals. <br />
                    Our commitment to affordability is embedded in every aspect of our platform. From cost-effective ingredients to budget-friendly meal plans, we empower you to savor the flavors without breaking the bank. We understand the importance of a diverse and accessible recipe collection, and we take pride in curating a vast array of dishes that cater to different tastes, preferences, and dietary needs. <br /> <br /><br />
                    <span className='span-header'>What sets us apart?</span> <br />
                    It is our dedication to intuitive recipe searching. Our website is designed to be your culinary companion, offering powerful search capabilities that simplify the quest for the perfect recipe. Whether you're a seasoned chef or a kitchen novice, our user-friendly interface ensures that you find exactly what you're looking for, effortlessly. <br /><br /><br />
                    Join us in embracing a community where cooking is a delightful adventure, unburdened by intrusive ads and excessive costs. At NERD Recipe, we're not just offering recipes; we're inviting you to be part of a movement that values affordable, ad-free, and exceptional culinary experiences. Let's cook up something extraordinary together!<br /><br /><br /></div>

            </div>

            <div><img className="photo" src={require('../../Resources/cooker.png')} alt="Cooker" /></div>


        </div>
    );
}

export default WhoWeAre;
