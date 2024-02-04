import React, { useState } from 'react';
import "./likeButton.css"
function LikeButton(props) {

    //fetch an endpoint which return if the recipe was liked or not given a specific user id.

    const [liked, setLiked] = useState(false);

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {


        if (props.isUserLoggedIn) {
            setIsActive(!isActive);
            setLiked(!liked);
            fetch('http://localhost:8080/api/rating', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    recipeId: props.recipeId,
                    personId: props.uuId,
                    favourite: liked
                }),
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Recipe added to favorites!');
                    } else {
                        console.log(response)
                        console.error('Failed to add recipe to favorites');
                    }
                })
                .catch(error => {
                    console.error('Error:', error);
                });
        } else {
            alert('You must log in before you click like it.');


        }
    }

    return (
        <>
            <div className={`heart-btn ${isActive ? 'heart-active' : ''}`} onClick={handleClick}>
                <div className="content">

                <span className={`heart ${isActive ? 'heart-active' : ''}`}></span>
                </div>
            </div>
        </>
    );
}

export default LikeButton;


