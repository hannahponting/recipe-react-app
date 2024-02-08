import React, { useContext, useState } from "react";
import "./RateRecipe.css"
import { submitRating } from "../../utils";

import AuthContext from "../AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";


const RateRecipe = (props) => {
  const context = useContext(AuthContext)
  let personID = context.user?.id ?? null;

  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [hover, setHover] = useState(null);

  const requestBody = {
    recipeId: props.id,
    personId: personID,
    myRating: rating,
  };
  const navigate = useNavigate();

  const getData = async () => {
    const response = await submitRating(requestBody);
    const body = response.json();
      if (response.status === 201) {
        props.fetchData();
        setMessage("Submitted Rating");
      }
      if (response.status === 500) {
        navigate('/login');
        setMessage(body.message);
      }
    }


  function handleClick() {
    getData();
  }

  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button
            type="button"
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </button>

        );
      })}

      <div> <button className="submit" onClick={handleClick}>Submit</button> </div>
      
      <p>{message}</p>
    </div>



  );

};

export default RateRecipe;