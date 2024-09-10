import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function UserRegister() {
const navigate = useNavigate(); // Hook to programmatically navigate

  // here, it does not ask an already logged in user to the register over and over again
  useEffect(()=>{
    const user = localStorage.getItem("user");
    if(user) {
      navigate('/home');   // navigating to the home page if the user is there.
    }
  }, []);

  const [formData, setFormData] = useState({
    Email: "",
    Name: "",
    PasswordHash: "",
    UserName: ""
  });

  const [errors, setErrors] = useState({});

  function handleChange(e){
    const {name, value} = e.target;
    setFormData({
      ...formData, [name] : value
    });
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  async function registerHandler(e){
    e.preventDefault();

    const validationErrors = {};
    if(!formData.Name.trim()) {
      validationErrors.Name = "Name is required!";
    } else if (formData.Name.length < 4) {
      validationErrors.Name = "Minimum character length is 4!";
    }

    if(!formData.Email.trim()){
      validationErrors.Email = "Email is required!";
    } else if (!validateEmail(formData.Email)) {
      validationErrors.Email = 'Email is not valid!';
    }

    if(!formData.PasswordHash.trim()) {
      validationErrors.PasswordHash = "Password is required!";
    }

    // creating the user name
    const newUserName = formData.Name.trim().split(" ");
    formData.UserName = newUserName.join("");

    setErrors(validationErrors);

    console.log('data before submit', formData)
    if (Object.keys(validationErrors).length === 0) {
      const response = await fetch("https://localhost:7181/api/Auth/register", {
        method: "POST",
        credentials: 'include',
        body: JSON.stringify(formData),
        headers: {
          "content-type": "Application/json",
          "Accept": "application/json"
        }
      })

      const data = await response.json();

      if(response.ok) {
        navigate('/login');
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
  }

  return (
    <div className='registerPageWrapper page'>
        <div className='registerPage'>
          <header>Register Page</header>
          <p className="message"></p>
          <div className="formHolder">
            <form action="#" className='register' onSubmit={registerHandler}>

              <label htmlFor="name">Name</label><br />
              <input type="text" name="Name" id="name" placeholder="Enter you name" onChange={handleChange} /><br />
              {errors.Name && <span>{errors.Name}</span>}<br />

              <label htmlFor="email">Email</label><br />
              <input type="text" name="Email" id="email" placeholder="example@hello.com" onChange={handleChange}  /><br />
              {errors.Email && <span>{errors.Email}</span>}<br />

              <label htmlFor="password">Password</label><br />
              <input type="password" name="PasswordHash" id="password" placeholder="******" onChange={handleChange} /><br />
              {errors.PasswordHash && <span>{errors.PasswordHash}</span>}<br />

              <input type="submit" value="Register" className='register btn' />
            </form>
          </div>
          <div>
            <span>Or </span>
            <a href="/login">Login</a>
          </div>
        </div>
    </div>
  )
}
