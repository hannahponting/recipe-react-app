import { useState } from "react";
import { Link } from "react-router-dom";
import "./ChangePassword.css";

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }


  const requestBody = {
    "email": email,
    "password": password
  };

  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/account/setPassword', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      if (response.ok) {
        const body = await response.text();
        console.log(body);
        setMessage(body);
      }
      if (response.status == 500) {
        const body = await response.json();
        console.log(body.message);
        setMessage(body.message);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      console.log(error.message);
      setMessage(error.message);
    }
  };

  const handleSubmitClick = () => {
    getData();
  };


  return (
    <>
      {/* <div className="changepassword-container">
        <header className="header">
          <div className="changepassword-title-container">
            <div className="Title">
              Change Password Page
            </div>
          </div>

        </header>
      </div> */}

      {/* <div className="Divider"></div> */}

      <div className="changepassword-background">


        <div className="changepassword-box-container">
          <div className="changepassword-box">
            <label className="passwordDetails-title">Change Password</label>
          </div>
          <div className="changepassword-box">
            <label className="passwordDetails">Email</label>
          </div>

          <div>
            <input className="changepassword-input-boxes" type="text" value={email} onChange={handleEmailChange} />

          </div>

          <div className="changepassword-box">
            <label className="passwordDetails">New Password</label>
          </div>
          <div>
            <input className="changepassword-input-boxes" type="password" value={password} onChange={handlePasswordChange} />

          </div>
          <button className="changepassword-button" onClick={handleSubmitClick}>Change</button>
          <div>


            <div className="account-login">
              <label>Don't have an account?</label>
              &nbsp;&nbsp;
              <Link to="/signup">Sign up</Link>
            </div>

            <div className="account-login">
              <label>Already a member?</label>
              &nbsp;&nbsp;
              <Link to="/login">Login</Link>
            </div>


          </div>

          <div className="changepassword-output-message">
            {message && <p>{message}</p>}

          </div>
        </div>

      </div>



    </>

  )

}

export default ChangePassword;