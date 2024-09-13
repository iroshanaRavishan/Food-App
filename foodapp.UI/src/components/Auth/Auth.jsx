import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './AuthStyles.css'

export default function Auth() {
  const navigate = useNavigate(); // Hook to programmatically navigate
  
  const [loginFormData, setLoginFormData] = useState({
    Email:'',
    Password:'',
    Remember:false
  });

  const [regFormData, setRegFormData] = useState({
    Email: "",
    Name: "",
    PasswordHash: "",
    UserName: ""
  });

  const [errors, setErrors] = useState({});
  const [isLoding, setIsLoading] = useState(false);
  const [formActive, setFormActive] = useState(false);
  const validationErrors = {};
  
  // here, it does not ask an already logged in user to the login over and over again
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user) {
      navigate('/home'); // navigating to the home page if the user is there.
    }
  }, []);

  function handleLoginChange(e){
    const {name, value} = e.target;
    setLoginFormData({
      ...loginFormData, [name] : value
    });
  }

  function handleRegChange(e){
    const {name, value} = e.target;
    setRegFormData({
      ...regFormData, [name] : value
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  function deactivateContainer() {
    setFormActive(true);
    setErrors({})
  }

  function activateContainer() {
    setFormActive(false);
    setErrors({})
  }

  async function loginHandler(e){
    e.preventDefault();  
    setIsLoading(true);

    if(!loginFormData.Email.trim()){
      validationErrors.Email = "Email is required!";
    } else if (!validateEmail(loginFormData.Email)) {
      validationErrors.Email = 'Email is not valid!';
    }

    if(!loginFormData.Password.trim()) {
      validationErrors.Password = "Password is required!";
    }

    if (loginFormData.Remember === 'on') {
      loginFormData.Remember = true;
    }

    setErrors(validationErrors);

    console.log("login data before send", loginFormData);
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("https://localhost:7181/api/Auth/login", {
        method: "POST",
        credentials: "include",
        body: JSON.stringify(loginFormData),
        headers: {
          "content-type": "Application/json",
          "Accept": "application/json"
        }
      });

      const data = await response.json();
      const messageElement = document.querySelector(".message");
  
      if (data.isSuccess == true) {
        setIsLoading(false);
      }

      if(data.message) {
        messageElement.innerHTML = data.message;
      }
      else {
        messageElement.innerHTML = "Something went wrong! Please try agin later.";
      }
  
      console.log("login status: ", data);
  
      if(response.ok) {
        localStorage.setItem("user", loginFormData.Email);
        navigate('/home');
      }
    }
    setIsLoading(false);
  }

  async function registerHandler(e){
    e.preventDefault();
    setIsLoading(true);

    const validationErrors = {};
    if(!regFormData.Name.trim()) {
      validationErrors.Name = "Name is required!";
    } else if (regFormData.Name.length < 4) {
      validationErrors.Name = "Minimum character length is 4!";
    }

    if(!regFormData.Email.trim()){
      validationErrors.Email = "Email is required!";
    } else if (!validateEmail(regFormData.Email)) {
      validationErrors.Email = 'Email is not valid!';
    }

    if(!regFormData.PasswordHash.trim()) {
      validationErrors.PasswordHash = "Password is required!";
    }

    // creating the user name
    const newUserName = regFormData.Name.trim().split(" ");
    regFormData.UserName = newUserName.join("");

    setErrors(validationErrors);

    console.log('data before submit', regFormData)
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("https://localhost:7181/api/Auth/register", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(regFormData),
        headers: {
          "content-type": "Application/json",
          "Accept": "application/json"
        }
      })

      const data = await response.json();

      if (data.isSuccess == true) {
        setIsLoading(false);
      }

      if(response.ok) {
        activateContainer();
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

      console.log("register status: ", data);
    }
    setIsLoading(false);
  }

  return (
        <div className={formActive ? 'container active' : 'container'}>
          <div className="form-container sign-in"> 
            <p className="message"></p>
              <form action="#" className="form" onSubmit={loginHandler}>
              <h1>Sign In</h1>
                <input type="text" name="Email" placeholder='example@hello.com' onChange={handleLoginChange} />
                {errors.Email && <span className='error-message'>{errors.Email}</span>}<br />

                <input type="password" name="Password" placeholder="******" onChange={handleLoginChange} />
                {errors.Password && <span className='error-message'>{errors.Password}</span>}<br />
               
                <input type="checkbox" name="Remember" onChange={handleLoginChange} />
                <label htmlFor="password">Remember?</label><br />

                <button type="submit" disabled={isLoding}>
                  { isLoding?
                    <div className="loading-spinner"></div>
                    : "Login" }
                </button>
              </form>
          </div>
          <div className="form-container sign-up"> 
            <p className="message"></p>
              <form action="#" className="form" onSubmit={registerHandler} autoComplete="off">
              <h1>Create Account</h1>
                <input type="text" name="Name" id="name" placeholder="Enter your name" onChange={handleRegChange}  />
                {errors.Name && <span className='error-message'>{errors.Name}</span>}<br />

                <input type="text" name="Email" id="email" placeholder="example@hello.com" onChange={handleRegChange}  />
                {errors.Email && <span className='error-message'>{errors.Email}</span>}<br />

                <input type="password" name="PasswordHash" id="password" placeholder="******" onChange={handleRegChange} />
                {errors.PasswordHash && <span className='error-message'>{errors.PasswordHash}</span>}<br />

                <button type="submit" disabled={isLoding}>
                  { isLoding?
                    <div className="loading-spinner"></div>
                    : "Register" }
                </button>
              </form>
          </div>
          <div className="toggle-container">
            <div className="toggle">
              <div className="toggle-panel toggle-left">
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features. Enter your personal details to use all of site features</p>
                <button className={isLoding ? 'loading' : 'hidden'} disabled={isLoding} onClick={activateContainer}> Sign In </button>
                <img src="./src/assets/images/img-1.svg" alt="img-1"/>
              </div>

              <div className="toggle-panel toggle-right">
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
                <button className={isLoding ? 'loading' : 'hidden'} disabled={isLoding} onClick={deactivateContainer}> Sign Up </button>
                <img src="/src/assets/images/img-2.svg" alt="img-2"/>
              </div>
            </div>
          </div>
        </div>
  )
}
