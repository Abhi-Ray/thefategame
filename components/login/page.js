"use client"
import React, { useState } from "react"
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import './index.css'
import Link from "next/link"

export default function Page() {
  // State to track if the user is logged in
  const [login, setLogin] = useState(false)

  // State to manage form input values (email and password)
  const [formdata, setFormdata] = useState({
    email: "",
    password: ""
  })

  // State to toggle password visibility
  const [view, setView] = useState(false)

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission (page reload)
    try {
      // Send POST request to login API with form data
      const response = await fetch('/api/login', {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(formdata)
      })
      setLogin(true) // Set login state to true on successful login
      console.log('Login Successful:', response)
    } catch (error) {
      console.error("Something went wrong", error) // Handle error if request fails
    }
  }

  // Handle input field changes for email and password
  const handleChange = (e) => {
    setFormdata({
      ...formdata, // Spread existing form data
      [e.target.name]: e.target.value // Update specific field based on name attribute
    });
  }

  return (
    <>
      {/* Render the Header component */}
      <Header />
      
      {/* Login form container */}
      <div className="login">
        <div className="login_form">
          <h1>Sign In</h1>

          {/* Login form */}
          <form onSubmit={handleSubmit}>
            {/* Email input field */}
            <label htmlFor="email">Email<sup>*</sup></label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              required
            />

            {/* Password input field with visibility toggle */}
            <label htmlFor="password">Password<sup>*</sup></label>
            <div className="password">
              <input
                type={view ? "text" : "password"} // Toggle between text/password
                name="password"
                onChange={handleChange}
                value={formdata.password}
                required
              />
              {/* Eye icon to toggle password visibility */}
              <span onClick={() => setView(!view)}>
                <i className="fa-regular fa-eye"></i>
              </span>
            </div>

            {/* Submit button */}
            <button type="submit">Sign In</button>
          </form>

          {/* Links for forgotten password and account registration */}
          <div className="login_bottom">
            <Link href="/forgot">Forgot Password</Link>
            <p>Don't have an account? <Link href="/register">Register an Account</Link></p>
          </div>
        </div>
      </div>

      {/* Render the Footer component */}
      <Footer />
    </>
  );
}
