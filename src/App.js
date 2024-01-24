import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import WelcomePage from './WelcomePage';
import RecipePage from './RecipePage';
import RecipeDetails from './RecipeDetails';
import NavBar from './NavBar';

function App() {
  return (
    <div className="App">
              <BrowserRouter>
      <Routes>
            <Route path='/' element={<NavBar />}>
            <Route path="/" element={<WelcomePage />}/>
            <Route path="/recipes" element={<RecipePage />}/>
            <Route path="/recipes/:id" element={<RecipeDetails/>}/>
            </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
