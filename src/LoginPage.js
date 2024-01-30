import { useState } from "react";

const LoginPage = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
      }
      const handlePasswordChange = (event) => {
        setPassword(event.target.value);
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
        getData();
        window.location.reload(false);
      };

      const requestBody = {
        "email": username,
        "password": password
      };

      const initialState = {
        isLoading: true,
        worked: false
    }
    const [data, setData] = useState(initialState)

      const getData = async () => {
        console.log("start")
        try {
          const response = await fetch('http://localhost:8080/api/account/login', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(requestBody),
          });

          const body = await response.json();
          console.log("Request: " + JSON.stringify(body)); 
    
          setData((prevData) => ({ ...prevData, worked: body, isLoading: false }));
        } catch (error) {
          console.error('Error fetching data:', error);
          setData((prevData) => ({ ...prevData, isLoading: false }));
        }
        if (data.worked==true){
            props.setUserID(()=> username)
        }
      };

    return(
        <div>
            <h2>Login Page</h2>
            <form>
                <div>
                     <label>Email:</label>
                      <input type="text" value={username} onChange={handleUsernameChange} />
                </div>
                    <div>
                        <label>Password:</label>
                        <input type="password" value={password} onChange={handlePasswordChange} />
                        </div>
                        <button onClick={()=>getData}type="submit">Login</button>
                        </form>
                        {data.worked}
                    </div>


    )
}

export default LoginPage;