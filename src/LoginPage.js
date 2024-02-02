import { useState } from "react";
import { PostUserLogin } from "./utils";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";


const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [uuid, setUuid] = useState(0);

  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const requestBody = {
    "email": username,
    "password": password
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/account/login', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const body = await response.json();
      console.log(body)
      if (body == true) {
        props.setUserID((prevUserID) => username);

        props.setIsLoggedIn(true);
        setMessage('Logged in');

        const urlApi = `http://localhost:8080/api/person/${username}`
        const response = await fetch(urlApi);
        const body = await response.json();
        props.setUuID(body.id);

        // const data = ({recipes: body.content, isLoading: false, totalPages: body.totalPages})

        navigate("/");
      }
      else {
        setMessage('Error please check your credentials');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage(error);
    }
  };

  const handleSubmitClick = () => {
    getData();
  };

  return (
    <div className="loginpage-container">
      <header className="header">
        <div className="Title">
          Login Page
        </div>
      </header>


      <div className="Divider"></div>


      <div className="credential-container">


        <div className="credential-box">
          <label className="loginDetails">Email</label>

        </div>

        <input className="credential-input-boxes" type="text" value={username} onChange={handleUsernameChange} />





        <div className="credential-box">
          <label className="loginDetails">Password</label>

          <div className="password-container-change"><Link to="/changepassword">Forgot Password?</Link></div>
        </div>
        <input className="credential-input-boxes" type="password" value={password} onChange={handlePasswordChange} />
        <div><button className="login-button" onClick={handleSubmitClick}>Login</button></div>

        <div className="account-signup">
          <label>Don't have an account?</label>
          &nbsp;&nbsp;
          <Link to="/signup">Sign up</Link>
        </div>



        {message && <p>{message}</p>}
      </div>

    </div>
  )

}

export default LoginPage;