import { useState } from "react";

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
    
          const body = await response.text();
          console.log(body)
          if (body === "password saved") {
            setMessage('Password successfully changed.');
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


    return(
        <div>
                   
            <h2>Change Password Page</h2>
                <div>
                     <label>Email:</label>
                      <input type="text" value={email} onChange={handleEmailChange} />
                </div>
                    <div>
                        <label>New Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <button onClick={handleSubmitClick}>Change</button>
                        {message && <p>{message}</p>}
                
        </div>

    )

}

export default ChangePassword;