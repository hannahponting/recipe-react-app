import React, {useContext, useState,useEffect} from 'react';
import "./likeButton.css"
import AuthContext from "../AuthContext/AuthContext";
function LikeButton(props) {
    const context = useContext(AuthContext);
    let user = context.user;
    let personID = user?.id ?? null;

    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            if(user){
            try {
                const initialState = await isFavourite(props.recipeId,personID);
                setIsActive(initialState);
            } catch (error) {
                console.error('Error fetching data:', error);

            }
        }};

        fetchData();
    }, [props.recipeId, personID]);


    const handleClick = () => {



        if (user) {
            setIsActive(prevState => {
                const newIsActive = !prevState;
                console.log("setIsActive" + newIsActive);
                return newIsActive; // Return the new value
            });

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
            //console.error('Error fetching data:', error);
            // console.log(fetch(urlApi)

            return false;
        });
}

export default LikeButton;


