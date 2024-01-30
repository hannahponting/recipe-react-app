import React, { useEffect, useState } from "react";


const RateRecipe = (props) => {

    const initialState = {
      isLoading: false,
      rating: { message: "" }
    };

    const [data, setData] = useState(initialState);
    const [myRating, setMyRating] = useState(0);
  
    const requestBody = {
      recipeId: props.id,
      personId: 2,
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
        console.log("Request: " + JSON.stringify(body)); // Logging the entire response
  
        setData((prevData) => ({ ...prevData, rating: body, isLoading: false }));
      } catch (error) {
        console.error('Error fetching data:', error);
        setData((prevData) => ({ ...prevData, isLoading: false }));
      }
    };
  
    const handleRateClick = () => {
      getData();
      window.location.reload(false);
    };
  
    return (
      <div>
        <div>
          <label htmlFor="rating">Enter:</label>
          <input
            type="number"
            id="rating"
            min={1}
            max={5}
            value={myRating}
            onChange={(e) => setMyRating(parseInt(e.target.value))}
          />
        </div>
        <button onClick={handleRateClick}>Rate Recipe</button>
        {data.isLoading ? (
          <p>Loading...</p>
        ) : (
          <div>{data.rating.message}</div>
        )}
      </div>
    );
  };
  
  export default RateRecipe;