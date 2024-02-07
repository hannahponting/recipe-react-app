import { useState } from "react";
import { Link } from "react-router-dom";
import "./ChangePassword.css";
import { PostChangePassword } from "../../utils";

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


  const getData = async () => {
    try {
      const body = await PostChangePassword(email, password).then((body)=>{
         if (body=='password saved') {
          setMessage(body)
      }
      else{
        setMessage(body.message);
      }
    })
    } catch (error) {
      setMessage(error)
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