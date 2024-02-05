import React, { useContext, useEffect, useState } from "react";
import "./RateRecipe.css"
import { GetUserByEmail } from "../../utils";
import AuthContext from "../AuthContext/AuthContext";


const RateRecipe = (props) => {
  const context = useContext(AuthContext)
  let personID = context.user?.id ?? null;

    const [myRating, setMyRating] = useState(0);
    const [message, setMessage] = useState();
  
    const requestBody = {
      recipeId: props.id,
      personId: personID,
      myRating: myRating,
      favourite: true
    };
  
    const getData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/rating', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(requestBody),
        });
        const body = await response.json();
        if(response.status==201){
        console.log((body));
        props.fetchData();
        setMessage("Submitted Rating");
        }
        if(response.status == 500){
          console.log(body.message);
          setMessage(body.message);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage(error.message)
      }
    };
  
    const handleRateClick = () => {
      getData();
    };
  
    return (
      <div className="body">
        <div>
          <label className="rating-label" htmlFor="rating">Enter Rating Here: </label>
          <input
            type="number"
            id="rating-input"
            min={1}
            max={5}
            value={myRating}
            onChange={(e) => setMyRating(parseInt(e.target.value))}
          />
        </div>
        <button className="rate-recipe-button" onClick={handleRateClick}>Rate Recipe</button>
        <p>{message}</p>
      </div>
    );
  };
  
  export default RateRecipe;