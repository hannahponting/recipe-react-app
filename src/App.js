import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipeCards/recipeCard.js"
import NavBar from './NavBar';
import WhoWeAre from './WhoWeAre';
import { GetIngredientsPaginated, GetRecipes, GetRecipesPaginated, GetUserByEmail } from './utils.js';
import RecipeSearchResults from './recipeSearchResults.js';
import Footer from './Footer.js';
import LoginPage from './LoginPage.js';
import { useEffect, useState } from 'react';
import ChangePassword from './ChangePassword.js';
import SignUp from './SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './Favourites.js'




function App() {
  const [userID, setUserID] = useState("hannah@nerdrecipes.com");
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="App">
             
      <BrowserRouter>

        <Routes>
      
          <Route path='/' element={<NavBar userID={userID}/>}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList queryEndpoint={GetRecipesPaginated} />} />
            <Route path="/ingredients" element={<RecipeCardList filterType="ingredients" queryEndpoint={GetIngredientsPaginated}/>} />
            <Route path="/recipes/:id" element={<RecipeDetails userID={userID} />} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />
            <Route path="/login" element={<LoginPage setUserID={setUserID}/>} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/favourites" element={<Favourites />} />
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/signup" element={<SignUp setUserID={setUserID}/>}/>
          </Route>
          
          
        </Routes>
        {!isLoginPage && <Footer />}
        
      </BrowserRouter>
      

      


    </div>
  );
}

export default App;
