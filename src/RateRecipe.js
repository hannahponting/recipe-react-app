import React, { useEffect, useState } from "react";


const RateRecipe = (props) => {

    const initialState = {
        isLoading: false,
        recipes: []
    }
    
    const [data, setData] = useState(initialState)
    const [myRating, setMyRating] = useState(0);

    const requestBody = {
        recipe: {
            id: props.id,
        },
        myRating: myRating,
    };

    const getData = async () => {
        try{
        const response = await fetch('http://localhost:8080/api/recipes/rating', {
            method: 'PATCH',
            headers:{'content-type': 'application/json'},
            body: JSON.stringify(requestBody),
        });
        const body = await response.json()
        console.log(body);
        setData({ recipes: body, isLoading: false });
    } catch(error){
        console.error('Error fetching data:', error);
    }
    };


    const handleRateClick = () => {
        getData();
        window.location.reload(false);
    }

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
                <div>{data.recipes.message}</div>
            )}
        </div>
    );
};


export default RateRecipe;