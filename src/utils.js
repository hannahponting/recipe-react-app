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
export async function GetIngredientsPaginated(pageNum, pageSize, query){
    const response = await fetch(`http://localhost:8080/api/recipes/search/ingredients/page/${pageNum}/${pageSize}${query}`);
    const body = await response.json()
    const data = ({ recipes: body.content, isLoading: false, totalPages: body.totalPages })
return data;
}

export async function GetRatingById(id){
    const response = await fetch(`http://localhost:8080/api/rating/${id}`);
    if (response.ok){
        const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                const body = await response.json();
                return body;
             }
    } 
    return 0;
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


export async function PostChangePassword(email, password){
    const requestBody = {
        "email": email,
        "password": password
      };
    
    const response = await fetch('http://localhost:8080/api/account/setPassword', {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(requestBody),
        });
    if (response.ok){
        const body = await response.text();
        return body;
    }
    if (response.status == 500) {
        const body = await response.json();
        return body;
      }
    return "error";
}


export async function PostNewUser(email, firstName, lastName){
    let requestBody = {
        "email": email,
        "firstName": firstName,
        "lastName": lastName
      }
      const response = await fetch('http://localhost:8080/api/person', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      if (response.status == '201') {
        return '201';
      } if(response.status == 500) {
        const body = await response.json();
        return body
      }
        return "error";
    }

    export async function GetPersonByEmail(email){
        const urlApi = `http://localhost:8080/api/person/${email}`
        const response = await fetch(urlApi);
        const body = await response.json();
        return body;
    }

    export async function PostUserLogin(email, password){
        const requestBody = {
            "email": email,
            "password": password
          };
            const response = await fetch('http://localhost:8080/api/account/login', {
              method: 'POST',
              headers: { 'content-type': 'application/json' },
              body: JSON.stringify(requestBody),
            });
            const body = await response.json();

            return body;

    }



