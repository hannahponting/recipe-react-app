import { useState } from "react";
import { PostUserLogin } from "./utils";
import "./LoginPage.css";
import { Link } from "react-router-dom";


const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');


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
        setMessage(()=>'Logged in');
      }
      else {
        setMessage('Error');
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
    <>
      <header className="header">
        <div className="Title">
          Login Page
        </div>
      </header>


      <div className="Divider"></div>


      <div className="credential-container">


        <div className="credential-box">
          <label className="loginDetails">Email:</label>
          <input className="credential-input-boxes" type="text" value={username} onChange={handleUsernameChange} />
        </div>



        <div className="credential-box">
          <label className="loginDetails">Password:</label>
          <input className="credential-input-boxes" type="password" value={password} onChange={handlePasswordChange} />

        <button className="login-button" onClick={handleSubmitClick}>Login</button>
        <ul className="list">
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/changepassword">Forgotten Password</Link></li>
        </ul>
        {message && <p>{message}</p>}

      </div>
      </div>

    </>
  )

}

export default LoginPage;