import { useState } from "react"
import Nav from "./components/Nav"
import "./app.css"

import { BrowserRouter as Router, Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider  } from 'react-router-dom';

import ProtectedRouter from "./ProtectedRouter"
import Auth from "./components/Auth"
import Home from "./components/Home"
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import { UserProvider } from "./context/UserContext";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [foodId, setFoodId] = useState("656329");

  const router = createBrowserRouter (
    createRoutesFromElements(
      <Route>
        {/* Protected route wrapper for authentication */}
        <Route element={ <ProtectedRouter /> }>
          <Route path="/" element={ <Home foodData={foodData} setFoodData={setFoodData} setFoodId={setFoodId} foodId={foodId} /> } />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/profile" element={<Profile/>} />      
        </Route>

        {/* Public routes */}
        <Route path="/auth" element={ <Auth /> } />

        {/* Fallback for undefined routes */}
        <Route path="*" element={
          <div>
            <header>
              <h1>Path is Not Found!</h1> 
            </header>
            <p>
              <a href="/auth">Back to Home</a>
            </p>
          </div>
        } />
      </Route>
    )
  )

  return (
    <div className="App">
      {/* Rendering the router using RouterProvider */}
      <UserProvider > 
      {/*This (UserProvider) ensure that all routes and components within have access to the user context. */}
        <Nav />
        <RouterProvider router={router} />
      </UserProvider>
    </div>
  )
}

export default App
