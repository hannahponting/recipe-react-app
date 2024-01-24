import { Link, Outlet } from "react-router-dom";


const NavBar = () => {
    
    return <>
      <Link to="/">Home</Link> | <Link to={"/recipes"}>Recipes</Link>
        <h1>Recipe Website</h1>
        

        <Outlet />

        <div>
        </div>
       
    </>
}


export default NavBar;