import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";
import AuthContext from "../AuthContext/AuthContext";
import { GetPersonByEmail, PostChangePassword, PostNewUser } from "../../utils";


const SignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const context = useContext(AuthContext)
  const [user, setUser] = [context.user, context.setUser];


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


  const getData = async () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-=']).{8,}$/;
    if(regex.test(password)){
    try{
      const body = await PostNewUser(email, firstName, lastName);
      if (body === '201') {
        try {
          await PostChangePassword(email, password).then((body)=>{
             if (body==='password saved') {
              setMessage("Successfully signed up")
              GetPersonByEmail(email).then((body)=>{setUser(body)})
          }
          else{
            setMessage(body.message);
          }
        })
        } catch (error) {
          setMessage(error)
        }
      }
    else{
      setMessage(body.message);
    }
    } catch (error) {
      setMessage(error.message)
    }
  }else {
    setMessage("The password must be at least 8 characters and contain an uppercase and a special character.")
  }
}

  const handleSubmitClick = () => {
    getData();
  };

  return (
    <>
      <div className="sign-up-background">
        {/* <div className="signup-container">
          <header className="header">
            <div className="signup-title-container">
              <div className="signuptitle">
                Sign up
              </div>
            </div>

          </header>
        </div>


        <div className="Divider"></div> */}
        <div className="signup-box-container">
          <div className="signup-box">
            <label className="signupDetails-title">Sign Up</label>
          </div>
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

          <div className="signup-output-message">
          {message && <p>{message}</p>}
          </div>
          
        </div>

      </div>

    </>
  )

};

export default SignUp;