import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  
  // here, it does not ask an already logged in user to the login over and over again
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user) {
      navigate('/home'); // navigating to the home page if the user is there.
    }
  }, []);

  async function loginHandler(e){

    e.preventDefault();
    const form_ = e.target, submitter = document.querySelector("input.login");
    const formData = new FormData(form_, submitter), dataToSend = {};

    for(const [key, value] of formData) {
      dataToSend[key] = value;
    }

    if (dataToSend.Remember === 'on') {
      dataToSend.Remember = true;
    }

    console.log("login data before send", dataToSend);
    const response = await fetch("https://localhost:7181/api/Auth/login", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify(dataToSend),
      headers: {
        "content-type": "Application/json",
        "Accept": "application/json"
      }
    })

    const data = await response.json();
    const messageElement = document.querySelector(".message");

    if(data.message) {
      messageElement.innerHTML = data.message;
    }
    else {
      messageElement.innerHTML = "Something went wrong! Please try agin later.";
    }

    console.log("login status: ", data);

    if(response.ok) {
      localStorage.setItem("user", dataToSend.Email);
      navigate('/home');
    }
  }

  return (
    <div className='loginPageWrapper page'>
        <div className='loginPage'>
          <header>Login Page</header>
          <p className="message"></p>
          <div className="formHolder">
            <form action="#" className='login' onSubmit={loginHandler}>

              <label htmlFor="email">Email</label><br />
              <input type="email" name="Email" id="email" required /><br />

              <label htmlFor="password">Password</label><br />
              <input type="password" name="Password" id="password" required /><br />

              <input type="checkbox" name="Remember" id="remember" required /><br />
              <label htmlFor="remember">Remember Password?</label><br />

              <input type="submit" value="Login" className='login btn' />
            </form>
          </div>
          <div>
            <span>Or </span>
            <a href="/register">Register</a>
          </div>
        </div>
    </div>
  )
}
