import { Await, useParams } from "react-router-dom"
const RecipeDetails = (props) => {
    let params = useParams();


    return (
        <div>
            <h1>Details of recipe {params.id}</h1>
            <p>
              <getData></getData>
            </p>
        </div>
    )

}



  

export default RecipeDetails;