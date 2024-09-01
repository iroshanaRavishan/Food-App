import React, { useEffect } from 'react'

export default function UserRegister() {
  
  // here, it does not ask an already logged in user to the register over and over again
  useEffect(()=>{
    const user = localStorage.getItem('user');
    if(user) {
      document.location = "/"; // navigating to the home page if the user is there.
    }
  },[]);

  async function registerHandler(e){
    e.preventDefault();
    const form_ = e.target, submitter = document.querySelector("input.register");

    const formData = new FormData(form_, submitter), dataToSend = {};

    for(const [key, value] of formData) {
      dataToSend[key] = value;
    }

    // creating the user name
    const newUserName = dataToSend.Name.trim().split("");
    dataToSend.UserName = newUserName.join("");

    const response = await fetch("api/Auth/register", {
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
      document.location = "/login"
    }

    const messageElement = document.querySelector(".message");
    if(data.message) {
      messageElement.innerHTML = data.message;
    }
    else {
      let errorMessages = "<div>Attention please:</div> <div class='normal'>"
      data.errors.forEach(error=> {
        errorMessages += error.description + " "
      })
      errorMessages += "</div>"
      messageElement.innerHTML = errorMessages;
    }

    console.log("register error: ", data);
  }


  return (
    <div className='registerPageWrapper page'>
        <div className='registerPage'>
          <header>Register Page</header>
          <p className="message"></p>
          <div className="formHolder">
            <form action="#" className='register' onSubmit={registerHandler}>

              <label htmlFor="name">Name</label><br />
              <input type="text" name="Name" id="name" required /><br />

              <label htmlFor="email">Email</label><br />
              <input type="email" name="Email" id="email" required /><br />

              <label htmlFor="password">Password</label><br />
              <input type="password" name="PasswordHash" id="password" required /><br />

              <input type="submit" value="Register" className='register btn' />

            </form>
          </div>
        </div>
    </div>
  )
}
