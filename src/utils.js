import React, { useEffect, useState } from 'react'

export function GetRecipes(){
    const initialState = {
        isLoading: true,
        recipes: []
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch('http://localhost:8080/api/recipes');
        console.log("BODY"+response);

        const body = await response.json()
        console.log("BODY"+body);
        setData({ recipes: body, isLoading: false })

    }
    useEffect(() => {
        getData()
    }, [])

    return data.recipes;

}

export function GetRecipesById(id){
    const initialState = {
        isLoading: true,
        recipes: []
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch(`http://localhost:8080/api/recipes/${id}`);

        const body = await response.json()
        console.log(body);
        setData({ recipes: body, isLoading: false })

    }
    useEffect(() => {
        getData()
    }, [])

    return data.recipes;

}

export function GetRecipesPaginated(pageNum, pageSize){
    const initialState = {
        isLoading: true,
        recipes: [],
        totalPages: 0
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch(`http://localhost:8080/api/recipes/page/${pageNum}/${pageSize}`);

        const body = await response.json()
        console.log(body);
        setData({ recipes: body.content, isLoading: false, totalPages: body.totalPages })

    }
    useEffect(() => {
        getData()
    }, [pageNum,pageSize])

    return data;

}
