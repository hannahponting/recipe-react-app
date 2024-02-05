import logo from './Resources/logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import WelcomePage from './component/WelcomePage/WelcomePage';
import RecipeDetails from './component/RecipeDetails/RecipeDetails';
import RecipeCardList from "./component/recipeCards/recipeCard.js"
import NavBar from './component/NavBar/NavBar';
import WhoWeAre from './component/WhoWeAre/WhoWeAre';
import { GetIngredientsPaginated, GetRecipes, GetRecipesPaginated, GetUserByEmail } from './utils.js';
import RecipeSearchResults from './component/RecipeSearchResults/recipeSearchResults.js';
import Footer from './component/Footer/Footer.js';
import LoginPage from './component/LoginPage/LoginPage.js';
import { useEffect, useState } from 'react';
import ChangePassword from './component/ChangePassword/ChangePassword.js';
import SignUp from './component/SignUp/SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './component/Favourite/Favourites.js'




function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");
  const [uuID, setUuID] = useState(0);
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="App">
             
      <BrowserRouter>

        <Routes>
      
          <Route path='/' element={<NavBar userID={userID} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserID={setUserID}/>}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList/>} />
            {/* <Route path="/ingredients" element={<RecipeCardList filterType="ingredients" queryEndpoint={GetIngredientsPaginated}/>} /> */}
            <Route path="/recipes/:id" element={<RecipeDetails userID={userID} />} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />
            <Route path="/login" element={<LoginPage setUserID={setUserID} setUuID={setUuID} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/favourites" element={<Favourites uuID={uuID} isLoggedIn={isLoggedIn}/>} />
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
