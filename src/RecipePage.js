import {GetRecipes} from "./utils";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const RecipePage = (props) => {
    const recipes = GetRecipes();
    console.log('here is the recipe lists');
    console.log(recipes);


return(
    <>
        <h1>This is the recipe list page </h1>

        <ul>
            {recipes.map((recipe) => {

                return (

                        // <div className="github-profile">
                        //     <img src={user.avatar_url} alt={user.name}/>
                        //     <div className="info">
                        //         <div key={user.name}><Link className="link" to={user.github_url}>{user.name}</Link>
                        //         </div>
                        //         <div className="company">{user.company}</div>
                        //     </div>
                        // </div>


                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={recipe.image} />
                    <Card.Body>
                        <Card.Title>{recipe.name}</Card.Title>
                        <Card.Text>
                            cuisine: {recipe.cuisine}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>


                )
            })}
        </ul>


        <p>

        </p>
    </>
)

}

export default RecipePage;