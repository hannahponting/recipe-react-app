import React, { useContext, useState, useEffect } from 'react';
import "./likeButton.css"
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";



function LikeButton(props) {
    const context = useContext(AuthContext);
    let user = context.user;
    console.log("user" + user);
    let personID = user?.id ?? null;

    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        fetchData();
    }, [props.recipeId, personID]);

    const fetchData = async () => {
        if (user) {
            const initialState = await isFavourite(props.recipeId, personID);
            setIsActive(initialState);
        }
    };

    const handleClick = () => {

        if (user) {
            setIsActive(prevState => { return !prevState; });
            postNewChangeToBack(props, personID, isActive);

        } else {

            navigate('/login');
        }
    };
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



export function isFavourite(recipeId, personId) {
    const urlApi = `http://localhost:8080/api/rating/favourite/${personId}/${recipeId}`;

    return fetch(urlApi)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (typeof data !== 'boolean') {
                throw new Error('Response did not contain a boolean value');
            }
            return data;
        })
        .catch(error => {

            return false;
        });
}

function postNewChangeToBack(props, personID, isActive) {
    fetch('http://localhost:8080/api/rating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            recipeId: props.recipeId,
            personId: personID,
            favourite: !isActive
        }),
    })
        .then(response => {
            if (response.ok) {
                console.log('Recipe favourite status updated!');
            } else {
                console.log(response)
                console.error('Failed to add recipe to favorites');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

export default LikeButton;


