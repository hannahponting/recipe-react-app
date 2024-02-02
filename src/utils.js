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


export function GetRecipesByKeyword(keyword){
    const initialState = {
        isLoading: true,
        recipes: []
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch(`http://localhost:8080/api/recipes/search/name/${keyword}`);

        const body = await response.json()
        console.log(body);
        setData({ recipes: body, isLoading: false })

    }
    useEffect(() => {
        getData()
    }, [keyword])

    return data.recipes;

}


export async function GetRecipesPaginated(pageNum, pageSize, query){
    const response = await fetch(`http://localhost:8080/api/recipes/search/custom/page/${pageNum}/${pageSize}${query}`);
    const body = await response.json()
    const data = ({ recipes: body.content, isLoading: false, totalPages: body.totalPages })
return data;
}



export function GetNewRatingById(id) {
    return new Promise(async (resolve, reject) => {
        try {
            const response = await fetch(`http://localhost:8080/api/rating/${id}`);

            if (response.ok) {
                const contentType = response.headers.get('content-type');
                if (contentType && contentType.includes('application/json')) {
                    const body = await response.json();
                    resolve(body);
                }
            } else {
                console.error('Error fetching data:', response.status);
                reject(response.status);
            }
        } catch (error) {
            console.error('Network error:', error);
            reject(error);
        }
    });
}


export function GetUserByEmail(id){
    const initialState = {
        isLoading: true,
        user: []
    }
    const [data, setData] = useState(initialState)
    const getData = async () => {
        const response = await fetch(`http://localhost:8080/api/person/${id}`);
        const body = await response.json()
        console.log(body)
        setData({ user: body, isLoading: false })

    }
    useEffect(() => {
        getData()
    }, [])


    return data.user;

}
