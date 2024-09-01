import { useState } from "react"
import Nav from "./components/Nav"
import Search from './components/Search'
import "./app.css"

import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import ProtectedRouter from "./ProtectedRouter"
import UserRegister from "./components/UserRegister"
import UserLogin from "./components/UserLogin"
import Home from "./components/Home"

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path="/">
        <Route element={ProtectedRouter}>
          <Route path="/" element={ <Search /> } />
          <Route path="/" element={ <Home foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId} foodId={foodId} /> } />
          {/* put the path to protect the routing */}
        </Route>
        <Route path="/login" element={ <UserLogin /> } />
        <Route path="/register" element={ <UserRegister /> } />
        <Route path="*" element={
          <div>
            <header>
              <h1>Not Found!</h1> 
            </header>
            <p>
              <a href="/">Back to Home</a>
            </p>
          </div>
        } />
      </Route>
    )
  )

  const isLogged = localStorage.getItem("user");
  
  return (
    <div className="App">
      <Nav isLogged={isLogged}/>
    </div>
  )
}

export default App
