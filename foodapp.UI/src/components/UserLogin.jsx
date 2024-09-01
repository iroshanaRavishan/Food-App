import React, { useEffect } from 'react'

export default function UserLogin() {
  
  // here, it does not ask an already logged in user to the login over and over again
  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(user) {
      document.location = "/"; // navigating to the home page if the user is there.
    }
  },[]);

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

    const response = await fetch("api/Auth/login", {
      method: "POST",
      credentials: 'include',
      body: JSON.stringify(dataToSend),
      headers: {
        "content-type": "Application/json",
        "Accept": "application/json"
      }
    })

    const data = await response.json();

    if(response.ok) {
      localStorage.setItem("user", dataToSend.Email);
      document.location = "/"
    }

    const messageElement = document.querySelector(".message");
    if(data.message) {
      messageElement.innerHTML = data.message;
    }
    else {
      messageElement.innerHTML = "Something went wrong! Please try agin later.";
    }

    console.log("login error: ", data);
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
        </div>
    </div>
  )
}
