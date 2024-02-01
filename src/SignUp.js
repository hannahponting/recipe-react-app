import { useState } from "react";
import { Link } from "react-router-dom";


const SignUp = (props) => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
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

  
    const initialState = {
      isLoading: false,
      worked: { message: "" }
    };
  
    const [data, setData] = useState(initialState);
  
    const requestBody ={
        "email": email,
        "firstName": firstName,
        "lastName": lastName
        }
  
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
        if (response.status==201) {
          props.setUserID((prevUserID) => email)
          setMessage("Signed up")
        }
        else{
            setMessage("Error")
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setMessage("error")
        console.log(data);
      }
    };
  
    const handleSubmitClick = () => {
      getData();
    };
  
    return (
      <>
        <header className="header">
          <div className="Title">
            Sign up
          </div>
        </header>
  
        <div className="Divider"></div>
        <div>
  
          <div>
            <label className="loginDetails">First name:</label>
            <input type="text" value={firstName} onChange={handleFirstNameChange} />
          </div>
          <div>
            <label className="loginDetails">Last name:</label>
            <input type="text" value={lastName} onChange={handleLastNameChange} />
          </div>
          <div>
            <label className="loginDetails">Email:</label>
            <input type="text" value={email} onChange={handleEmailChange} />
          </div>
          <button onClick={handleSubmitClick}>Sign Up</button>
          <div>
            <ul className="list">
              <li><Link to="/changepassword">Forgotten Password</Link></li>
              <li><Link to="/login">Login</Link></li>
          </ul>
          </div>
          {message && <p>{message}</p>}
        </div>
      </>
    )
  
  }
  
export default SignUp;