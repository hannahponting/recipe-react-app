import { useState } from "react";
import { Link } from "react-router-dom";

const ChangePassword =() => {
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
          if(response.ok){
              const body = await response.text();
              console.log(body);
              setMessage(body);
            }
          if(response.status == 500){
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
      

    return(
      <>
      <header className="header">
        <div className="title">
        Change Password Page
        </div>
      </header>
        <div className="Divider"></div>
                 <div>
                     <label>Email:</label>
                      <input type="text" value={email} onChange={handleEmailChange} />
                </div>
                <div>
                        <label>New Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                </div>
                        <button onClick={handleSubmitClick}>Change</button>
                  <div>
                  <ul className="list">
                        <li><Link to="/signup">Sign up</Link></li>
                        <li><Link to="/login">Login</Link></li>
                </ul>
                        {message && <p>{message}</p>}
                  </div>
           
              
        </>

    )

}

export default ChangePassword;