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
import AuthContext from './component/AuthContext/AuthContext.js';





function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState();
  const isLoginPage = window.location.pathname === '/login';

  return (
    <div className="App">
    <AuthContext.Provider value = {{user, setUser}}>
             
      <BrowserRouter>

        <Routes>
      
          <Route path='/' element={<NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>}>
            <Route path="/" element={<WelcomePage isLoggedIn={isLoggedIn}/>} />
            <Route path="/recipes" element={<RecipeCardList queryEndpoint={GetRecipesPaginated} isLoggedIn={isLoggedIn}/>} />
            <Route path="/recipes/:id" element={<RecipeDetails/>} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />
            <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/favourites" element={<Favourites isLoggedIn={isLoggedIn}/>} />
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/signup" element={<SignUp/>}/>
          </Route>
          
          
        </Routes>
        {/* {!isLoginPage && <Footer />} */}
        <Footer></Footer>
      </BrowserRouter>
      </AuthContext.Provider>

      


    </div>
  );
}

export default App;
