"use client"
import React, { useState } from "react"

import './index.css'
import Link from "next/link"

export default function Page({ setStep, setMobile }) {
    // State to track whether the user is registering and to hold form data
    const [register, setRegister] = useState(false);
  const [error, setError] =useState(false)
    
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        dob: "",
        mobile: "",
        coupon: ""
    });

    setTimeout(()=>{
        setError(false)
        },2000)
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent the default form submission behavior

        // Commented out the original API request part
        /*
        try {
          // Send a POST request to the '/api/login' endpoint with the form data
          const response = await fetch('/api/login', {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData) // Convert form data to JSON
          });
      
          // If the response is not OK (e.g., status code not 200), throw an error
          if (!response.ok) {
            throw new Error('Something went wrong!');
            setError(true)

          }
      
          // Parse the JSON response
          const data = await response.json();
          console.log('Registration successful:', data);
      
          // Set the registration state to true upon successful registration
          setRegister(true);
          setMobile(formdata.mobile)
        } catch (error) {
          // Log any error that occurs during the registration process
          console.error('Error during registration:', error);
            setError(true)

        }
        */

        // Move to the next step immediately after form submission
        setStep(2); // Move to the next step (step 2)
    }


    // Function to handle input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="register_step_one">
            <h1>Create an Account</h1>
            <h2>Step 1/2: Fill out your details</h2>
            <form onSubmit={handleSubmit}>
                {/* Username input */}
                <label htmlFor="username">Username<sup>*</sup></label>
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    minLength={5}
                    maxLength={15}
                    required
                />

                {/* Email input */}
                <label htmlFor="email">Email<sup>*</sup></label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                {/* Password input */}
                <label htmlFor="password">Password<sup>*</sup></label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />

                {/* Mobile input */}
                <label htmlFor="mobile">Mobile<sup>*</sup></label>
                <input
                    type="text"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    minLength={10}
                    maxLength={10}
                    required
                />

                {/* Date of Birth input */}
                <label htmlFor="dob">Date of Birth<sup>*</sup></label>
                <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />

                {/* Coupon input */}
                <label htmlFor="coupon">Coupon</label>
                <input
                    type="text"
                    name="coupon"
                    value={formData.coupon}
                    onChange={handleChange}
                />

                <p>
                    By submitting your phone number, you are opting-in to receive marketing communications & offers from Fate.
                </p>
                <button type="submit">Continue</button>

                <span>Already have an account? <Link href="/login">Sign In</Link></span>
            </form>
            {
                        error &&
                        <p className="error-msg">Something went wrong</p>
                    }
        </div>
    );
}
