import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipeDetails from './RecipeDetails';
import RecipeCardList from "../src/recipe/recipeCard.js"
import NavBar from './NavBar';
import WhoWeAre from './WhoWeAre';

function App() {
  return (
    <div className="App">


      
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/recipes" element={<RecipeCardList />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/WhoWeAre" element={<WhoWeAre />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
