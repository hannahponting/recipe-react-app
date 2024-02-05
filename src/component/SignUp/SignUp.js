import { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";


const SignUp = (props) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  let answer = "";

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }




  let requestBody = {
    "email": email,
    "firstName": firstName,
    "lastName": lastName
  }
  let passwordRequestBody = {
    "email": email,
    "password": password
  };




  const getData = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/person', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(requestBody),
      });
      const body = await response.json();
      console.log(response)
      answer = JSON.stringify(body);
      console.log(answer)
      if (response.status == 201) {
        props.setUserID((prevUserID) => email)
        setMessage("Successfully signed up")

        try {
          const response = await fetch('http://localhost:8080/api/account/setPassword', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(passwordRequestBody),
          });
          if (response.ok) {
            const body = await response.text();
          }
          if (response.status == 500) {
            const body = await response.json();
            console.log(body.message);
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          console.log(error.message);
        }
      }
      if (response.status == 500) {
        console.log(body.message)
        setMessage(body.message)
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setMessage(error.message)
    }


  };

  const handleSubmitClick = () => {
    getData();
  };

  return (
    <>
      <div className="signup-container">
        <header className="header">
          <div className="signup-title-container">
            <div className="Title">
              Sign up
            </div>
          </div>

        </header>
      </div>


      <div className="Divider"></div>
      <div className="signup-box-container">
        <div className="signup-box">
          <label className="signupDetails">First name</label>
        </div>
        <div>
          <input className="signup-input-boxes" type="text" value={firstName} onChange={handleFirstNameChange} />
        </div>

        <div className="signup-box">
          <label className="signupDetails">Last name</label>
        </div>

        <div>
          <input className="signup-input-boxes" type="text" value={lastName} onChange={handleLastNameChange} />

        </div>

        <div className="signup-box">
          <label className="signupDetails">Email</label>
        </div>

        <div>
          <input className="signup-input-boxes" type="text" value={email} onChange={handleEmailChange} />

        </div>

        <div className="signup-box">
          <label className="signupDetails">Password</label>

        </div>

        <div>
          <input className="signup-input-boxes" type="password" value={password} onChange={handlePasswordChange} />

        </div>


        <button className="signup-button" onClick={handleSubmitClick}>Sign Up</button>

        {/* <li><Link to="/changepassword">Forgot Password?</Link></li> */}

        <div className="account-login">
          <label>Are you already registered?</label>
          &nbsp;&nbsp;
          <Link to="/login">Login</Link>
        </div>
        {message && <p>{message}</p>}
      </div>
    </>
  )

};

export default SignUp;