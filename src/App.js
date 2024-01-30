import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipeCards/recipeCard.js"
import NavBar from './NavBar';
import WhoWeAre from './WhoWeAre';
import { GetRecipes } from './utils.js';
import RecipeSearchResults from './recipeSearchResults.js';

function App() {

  const recipes = GetRecipes();
  return (
    <div className="App">
             
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/recipes/search" element={<RecipeSearchResults />} />

            <Route path="/WhoWeAre" element={<WhoWeAre />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
