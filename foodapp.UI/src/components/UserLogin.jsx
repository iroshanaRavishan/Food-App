import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserLogin() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  
  const [formData, setFormData] = useState({
    Email:'',
    Password:'',
    Remember:false
  });

  const [errors, setErrors] = useState({});
  
  // here, it does not ask an already logged in user to the login over and over again
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user) {
      navigate('/home'); // navigating to the home page if the user is there.
    }
  }, []);

  function handleChange(e){
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    });
  }

  async function loginHandler(e){
    e.preventDefault();    
    const validationErrors = {};
    if(!formData.Email.trim()){
      validationErrors.Email = "Email is required!";
    } else if(/\S+@\S+\.S+/.test(formData.Email)){
      validationErrors.Email = "Email is not valid!";
    }

    if(!formData.Password.trim()) {
      validationErrors.Password = "Password is required!";
    }

    if (formData.Remember === 'on') {
      formData.Remember = true;
    }

    setErrors(validationErrors);

    console.log("login data before send", formData);
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("https://localhost:7181/api/Auth/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(formData),
        headers: {
          "content-type": "Application/json",
          "Accept": "application/json"
        }
      });

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
        localStorage.setItem("user", formData.Email);
        navigate('/home');
      }
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
              <input type="email" name="Email" placeholder='example@hello.com' onChange={handleChange} required /><br />
              {errors.Email && <span>{errors.Email}</span>}<br /><br />

              <label htmlFor="password">Password</label><br />
              <input type="password" name="Password" onChange={handleChange} required /><br />
              {errors.Password && <span>{errors.Password}</span>}<br /><br />

              <input type="checkbox" name="Remember" onChange={handleChange} required />
              <label htmlFor="remember"> Remember Password?</label><br />

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
