
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import WelcomePage from './component/WelcomePage/WelcomePage';
import RecipeDetails from './component/RecipeDetails/RecipeDetails';
import RecipeCardList from "./component/recipeCards/recipeCard.js"
import NavBar from './component/NavBar/NavBar';
import WhoWeAre from './component/WhoWeAre/WhoWeAre';

import RecipeSearchResults from './component/RecipeSearchResults/recipeSearchResults.js';
import Footer from './component/Footer/Footer.js';
import LoginPage from './component/LoginPage/LoginPage.js';
import {useState } from 'react';
import ChangePassword from './component/ChangePassword/ChangePassword.js';
import SignUp from './component/SignUp/SignUp.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Favourites from './component/Favourite/Favourites.js'
import AuthContext from './component/AuthContext/AuthContext.js';




function App() {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [user, setUser] = useState();


 const moveSidebar = () => {
  setSidebarVisible((prevSidebar) => !prevSidebar)
}

  const closeSidebar = (event) => {
            if (event) event.preventDefault()
            setSidebarVisible((prevSidebar) => {
              return false
            
            })
        }

        const closeSidebaronExitClick = () => {
          if (isMouseOver === false && sidebarVisible === true) {closeSidebar()}
        }
        const handleMouseEnter = () => {
          setIsMouseOver(true)
      }
      const handleMouseLeave = () => {
          setIsMouseOver(false)
        };
  
    const headerStyle = {
     zIndex : !sidebarVisible? "1": "-1"

    }
    const headerStyleForRecipeCard = {
        zIndex : !sidebarVisible? "0": "-1"
    }


    const appStyle = {
     backgroundColor : !sidebarVisible? "white ":"rgb(204, 204, 204, 0.70)"
    }
 



  return (
    <div className="App" style={appStyle} onClick={closeSidebaronExitClick} >
    <AuthContext.Provider value = {{user, setUser}}>
             
      <BrowserRouter>

        <Routes>
      
          <Route path='/' element={<NavBar  style={headerStyle} />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList sidebarVisible={sidebarVisible} handleMouseLeave={handleMouseLeave} handleMouseEnter={handleMouseEnter} moveSidebar={moveSidebar} style={headerStyleForRecipeCard} closeSidebar={closeSidebar}   />} />
            <Route path="/recipes/:id" element={<RecipeDetails/>} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />
            <Route path="/favourites" element={<Favourites/>} />
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
