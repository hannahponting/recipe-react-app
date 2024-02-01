import { useState } from "react";
import { PostUserLogin } from "./utils";
import "./LoginPage.css";
import { Link } from "react-router-dom";


const LoginPage = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  let answer = false;

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const initialState = {
    isLoading: false,
    worked: { message: "" }
  };

  const [data, setData] = useState(initialState);

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
      answer = JSON.stringify(body);
      console.log(answer)
      if (answer == "true") {
        props.setUserID((prevUserID) => username);

      }
      setData((prevData) => ({ ...prevData, worked: body, isLoading: false }));
    } catch (error) {
      console.error('Error fetching data:', error);
      setData((prevData) => ({ ...prevData, isLoading: false }));
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
      <div>

        <div>
          <label className="loginDetails">Email:</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>

          <label className="loginDetails">Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button onClick={handleSubmitClick}>Login</button>
      </div>

    </>
  )

}

export default LoginPage;