import { useState } from "react";
import { Link } from "react-router-dom";
import "./ChangePassword.css";
import { PostChangePassword, TriggerPasswordReset } from "../../utils";

const ChangePassword = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [codeMessage, setCodeMessage] = useState('');
  const [code, setCode] = useState('');

  const [needCode, setNeedCode] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleCodeChange = (event) => {
    setCode(event.target.value);
  }

  const getData = async () => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*()\-=']).{8,}$/;
    if(regex.test(password)){
    try {
      PostChangePassword(email, password, code).then((body) => {
        if (body === 'password saved') {
          setMessage(body)
        }
        else {
          setMessage(body.message);
        }
      })
    } catch (error) {
      setMessage(error)
    }
  }else{
    setMessage("The password must be at least 8 characters and contain an uppercase and a special character.")
  }
  };

  const handleSubmitClick = () => {
    getData();
  };

  const handleCodeSubmitClick = () => {
    console.log("starting")
    TriggerPasswordReset(email).then(((response) => {
      if (response == '200') {
        setCodeMessage("code sent")
      } else {
        setCodeMessage("please check email provided")
      }
    }))
  };

  const switchToCodeGeneration = () => {
    setNeedCode(true);
  }

  const switchToResetPassword = () => {
    setNeedCode(false);
  }

  return (
    <div className="changepassword-background">
      <div >
        {needCode ? (
          <div className="generate-code-box-container" >
            <div className="changepassword-box">
              <label className="sendCode-title">Forgotten your password?</label>
            </div>
            <div className="changepassword-container">
              <div className="changepassword-box">
                <label className="passwordDetails">Send yourself a code below</label>
              </div>
              <div className="changepassword-box">
                <label className="passwordDetails">Email</label>
              </div>
              <div>
                <input className="changepassword-input-boxes" type="text" value={email} onChange={handleEmailChange} />
              </div>
            </div>
            <div>
              <button className="changepassword-button" onClick={handleCodeSubmitClick}>Generate code</button>
            </div>
            <div>
            </div>
            <div className="changepassword-output-message">
              {codeMessage && <p>{codeMessage}</p>}

            </div>

            <div className="already-got-code-container">
              <Link className="page-toggle" onClick={switchToResetPassword}>Already got a Code?</Link>

            </div>
          </div>

        ) : (


          <div className="changepassword-box-container" >
            <div className="changepassword-box">
              <label className="passwordDetails-title">Change Password</label>
            </div>
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

                <div className="changepassword-box">
                  <label className="passwordDetails">Code</label>
                </div>
                <div>
                  <input className="changepassword-input-boxes" type="text" value={code} onChange={handleCodeChange} />
                </div>
              </div>
            </div>
            <button className="changepassword-button" onClick={handleSubmitClick}>Change</button>
            <div>
            </div>

            <div className="changepassword-output-message">
              {message && <p>{message}</p>}

            </div>
            <Link className="page-toggle" onClick={switchToCodeGeneration}>Generate Code</Link>
          </div>

        )}
      </div>
    </div>

  )

}

export default ChangePassword;