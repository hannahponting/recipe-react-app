import { Link, useNavigate } from "react-router-dom";


const WelcomePage = (props) => {
    const navigate = useNavigate()

    return (
        <>
        <h1>This is the welcome Page</h1>
        <Link to={'/recipes'}>Click here for recipes</Link>

        </>
    )
}

export default WelcomePage;