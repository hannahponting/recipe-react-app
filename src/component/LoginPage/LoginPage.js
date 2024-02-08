import { useContext, useState } from "react";
import { GetPersonByEmail, PostUserLogin } from "../../utils";
import "./LoginPage.css";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../AuthContext/AuthContext";


const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const context = useContext(AuthContext)
  const [setUser] = [context.setUser];

  let navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const getData = async () => {
    try{
      PostUserLogin(username, password).then((body) => {
      console.log(body)
      if (body == true) {
        setMessage('Logged in');
        GetPersonByEmail(username).then((body)=>{setUser(body)})
        navigate("/");
      }
      else {
        setMessage('Error please check your credentials');
      }
      })
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage(error);
    }
  };

  const handleSubmitClick = () => {
    getData();
  };

  return (
    <div className="login-background">
      <div className="loginpage-container">
        {/* <header className="header">
        <div className="login-title-container">
          <div className="Title">
            Login Page
          </div>
        </div>

      </header>


      <div className="Divider"></div> */}


        <div className="credential-container">
          <div className="credential-box">
            <label className="loginDetails-title">Login</label>

          </div>


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


          <div className="login-output-message">
            {message && <p>{message}</p>}

          </div>
        </div>

      </div>
    </div>

  )

}

export default LoginPage;