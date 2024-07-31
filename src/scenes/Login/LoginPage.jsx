import React, {useState} from 'react';
import PropTypes from 'prop-types';
//import '../Login/style.css';
import './Loginstyle.css';

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

   // User Login info
   const database = [
    {
      username: "admin",
      password: "pass12"
    },
    {
      username: "varun",
      password: "Singh"
    },
    {
      username: "aman",
      password: "Jha"
    },
    {
      username: "nishit",
      password: "Srivastava"
    },
    {
      username: "devendra",
      password: "Shukla"
    },

  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const userData = database.find((user) => user.username === username);
    
    if (userData) {
      if (userData.password !== password) {

        alert("Invalid password");
      } else {
         
        setToken({token:"test123"});
      }
    } else {


      alert("Username not found");
    }
 
  }; 
  

  return(
    <div className="login-wrapper">
      <div className="header">
        <h2>Welcome </h2>
      </div>
      <div className="form-container">
        <h3>Login to your account</h3>
        <form onSubmit={handleSubmit}>
          <label>
            <p>Username</p>
            <input
             type="text"
             required 
             onChange={e => setUserName(e.target.value)} />
          </label>
          <label>
            <p>Password</p>
            <input
             type="password"
             required 
             onChange={e => setPassword(e.target.value)} 
             />
          </label><br /><br />
          <div>
            <button type="submit">Submit</button>
          </div>
          <br /><br />
        </form>
      </div>
      <div className="footer">
        <p>Don't have an account? Contact Administrator</p>
        <br /><br />
      </div>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}

