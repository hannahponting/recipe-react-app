import React, { useContext, useEffect, useState } from "react";
import "./RateRecipe.css"
import { GetUserByEmail } from "../../utils";

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
    try {
      const response = await fetch('http://localhost:8080/api/rating', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const body = await response.json();
      if (response.status == 201) {
        console.log((body));
        props.fetchData();
        setMessage("Submitted Rating");
      }
      if (response.status == 500) {
        navigate('/login');
        console.log(body.message);
        setMessage(body.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage(error.message)
    }
  };

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