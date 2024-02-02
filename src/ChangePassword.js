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

      const body = await response.text();
      console.log(body)
      if (response.status == 201) {
        setMessage(body);
      } else {
        setMessage('Password not changed. Please check your credentials.');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('An error occurred while changing the password.');
    }
  };

  const handleSubmitClick = () => {
    getData();
  };


  return (
    <>
      <header className="header">
        <div className="Title">
          Change Password Page
        </div>
      </header>
      <div className="Divider"></div>

      <div className="changepassword-container">
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
        {message && <p>{message}</p>}
      </div>


    </>

  )

}

export default ChangePassword;