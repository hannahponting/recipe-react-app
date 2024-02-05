import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipeCards/recipeCard.js"
import NavBar from './NavBar';
import WhoWeAre from './WhoWeAre';
import { GetRecipes, GetUserByEmail } from './utils.js';
import RecipeSearchResults from './recipeSearchResults.js';
import Footer from './Footer.js';
import LoginPage from './LoginPage.js';
import { useEffect, useState } from 'react';
import ChangePassword from './ChangePassword.js';
import SignUp from './SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './Favourites.js'
import Sidebar from './Sidebar.js';




function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [userID, setUserID] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isLoginPage = window.location.pathname === '/login';

 

    const styles = {
      display : sidebarVisible ? "block" : "none"
    }

    const recipePageStyle = {
      zIndex : sidebarVisible? "-1" : "1"
    }

    const moveSidebar = () => {
      setSidebarVisible((prevSidebar) => !prevSidebar)
  }

  const closeSidebar = () => {
    setSidebarVisible((prevSidebar) => {
      return false
    
    })
}

  return (
    <div  className="App">
             
      <BrowserRouter>

        <Routes>
      
          <Route path='/' element={<NavBar userID={userID} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setUserID={setUserID}/>}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList style={recipePageStyle} closeSidebarFunction={closeSidebar} function={moveSidebar} />} />
            <Route path="/recipes/:id" element={<RecipeDetails userID={userID} />} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />
            <Route path="/login" element={<LoginPage setUserID={setUserID} setIsLoggedIn={setIsLoggedIn}/>} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/favourites" element={<Favourites isLoggedIn={isLoggedIn}/>} />
            <Route path="/changepassword" element={<ChangePassword/>}/>
            <Route path="/signup" element={<SignUp setUserID={setUserID}/>}/>
          </Route>
          
          
        </Routes>
        {!isLoginPage && <Footer />}
        <Sidebar
        function= {moveSidebar}
        style= {styles}
        ></Sidebar>
        
      </BrowserRouter>
      

      


    </div>
  );
}

export default App;
