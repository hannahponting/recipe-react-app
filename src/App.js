import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipe/recipeCard"
import Navigation from './NavBar';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
      <Routes>
              <Route path='/' element={<Navigation />}>
              <Route path="/" element={<WelcomePage />}/>
              <Route path="/recipes" element={<RecipeCardList />}/>
              <Route path="/recipes/:id" element={<RecipeDetails/>}/>
            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
