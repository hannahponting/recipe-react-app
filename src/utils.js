import React, { useEffect, useState } from 'react'

export function GetRecipes(){
    const initialState = {
        isLoading: true,
        recipes: []
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/recipes');

        const body = await response.json()
        console.log(body);
        setData({ recipes: body, isLoading: false })

    }
    useEffect(() => {
        getData()
    }, [])

    return data.recipes;

}
