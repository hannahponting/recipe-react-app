import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipe/recipeCard.js"
import NavBar from './NavBar';
import { GetRecipes } from './utils.js';

function App() {

  const recipes = GetRecipes();
  return (
    <div className="App">
              <BrowserRouter>
      <Routes>
              <Route path='/' element={<NavBar />}>
              <Route path="/" element={<WelcomePage />}/>
              <Route path="/recipes" element={<RecipeCardList recipes = {recipes}/>}/>
              <Route path="/recipes/:id" element={<RecipeDetails recipes = {recipes}/>}/>

            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
