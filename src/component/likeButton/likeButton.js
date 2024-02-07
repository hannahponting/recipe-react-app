import React, { useContext, useState, useEffect } from 'react';
import "./likeButton.css"
import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import { isFavourite, postNewChangeToBack } from '../../utils';


function LikeButton(props) {
    const context = useContext(AuthContext);
    let user = context.user;
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
          setIsActive(prevState => !prevState);
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

export default LikeButton;


