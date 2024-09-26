"use client";
import React, { useState } from "react";
import Header from "@/components/header/page";
import Footer from "@/components/footer/page";
import "./index.css";
import Link from "next/link";
import { useRouter } from "next/navigation";
import emailjs from "emailjs-com";

export default function Page() {
  const router = useRouter();

  const [forgot, setForgot] = useState(false);
  const [verify, setVerify] = useState(false);
  const [correctOtp, setCorrectOtp] = useState(false);
  const [error, setError] = useState(false);
  const [otperror, setOtperror] = useState(false);
  const [emailerror, setEmailerror] = useState(false);

  const [formdata, setFormdata] = useState({
    email: "",
    password: "",
  });

  // Timeout for clearing error states
  setTimeout(() => {
    setError(false);
    setEmailerror(false);
    setOtperror(false);
  }, 2000);

  const [view, setView] = useState(false); // Toggle password visibility
  const [otp, setOtp] = useState(""); // OTP input value
  const [generatedOtp, setGeneratedOtp] = useState(""); // State for generated OTP

  const [loadingSendOtp, setLoadingSendOtp] = useState(false); // State for sending OTP
  const [loadingSubmitOtp, setLoadingSubmitOtp] = useState(false); // State for submitting OTP
  const [loadingSubmitPassword, setLoadingSubmitPassword] = useState(false); // State for submitting new password

  // Handle changes in input fields (email, password, OTP)
  const handleChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  // Handle sending OTP using EmailJS
  const sendOtp = async () => {
    setLoadingSendOtp(true); // Disable the button

    // Generate a random OTP
    const newOtp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(newOtp);

    const templateParams = {
      otp: newOtp,
      to_email: formdata.email,
    };

    // Use EmailJS to send OTP
    emailjs
      .send(
        "service_kl9pe3v", 
        "template_psub06l", 
        templateParams,
        "rned7BPC4H75itdhD"
      )
      .then((response) => {
        console.log("OTP sent successfully!", response.status, response.text);
        setVerify(true); // Show OTP input field after successful sending
      })
      .catch((error) => {
        console.error("Failed to send OTP:", error);
        setEmailerror(true); // Set error if OTP fails
      })
      .finally(() => {
        setLoadingSendOtp(false); // Re-enable the button
      });
  };

  // Function to submit the OTP and verify it
  const submitOtp = () => {
    setLoadingSubmitOtp(true); // Disable the button

    if (parseInt(otp) === generatedOtp) {
      setCorrectOtp(true); // OTP matches, proceed
    } else {
      console.error("Incorrect OTP");
      setOtperror(true); // Set OTP error if incorrect
    }

    setLoadingSubmitOtp(false); // Re-enable the button
  };

  // Handle form submission for password reset request
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoadingSubmitPassword(true); // Disable the button

    try {
      const response = await fetch("/api/forgot", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      setForgot(true); // Successful submission
      console.log("Password reset successful:", response);
      router.push("/login"); // Navigate to login
    } catch (error) {
      console.error("Something went wrong", error);
      setError(true); // Show error
    } finally {
      setLoadingSubmitPassword(false); // Re-enable the button
    }
  };

  return (
    <>
      {/* Header */}
      <Header />

      {/* Forgot Password Form */}
      <div className="forgot">
        <div className="forgot_form">
          <h1>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">
              Email<sup>*</sup>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formdata.email}
              required
            />

            {/* Button for sending OTP, disabled while sending */}
            {!verify && (
              <>
                <button
                  type="button"
                  onClick={sendOtp}
                  disabled={loadingSendOtp}
                >
                  {loadingSendOtp ? "Sending OTP..." : "Verify"}
                </button>
                {emailerror && <p className="error-msg">Something went wrong</p>}
              </>
            )}

            {/* OTP Input */}
            {verify && !correctOtp && (
              <>
                <label htmlFor="otp">
                  OTP<sup>*</sup>
                </label>
                <input
                  type="text"
                  name="otp"
                  onChange={(e) => setOtp(e.target.value)}
                  value={otp}
                  required
                  minLength={6}
                  maxLength={6}
                />
                <button
                  type="button"
                  onClick={() => submitOtp(otp)}
                  disabled={loadingSubmitOtp}
                >
                  {loadingSubmitOtp ? "Verifying..." : "Submit OTP"}
                </button>
                {otperror && <p className="error-msg">Wrong OTP</p>}
              </>
            )}

            {/* New Password Field */}
            {correctOtp && (
              <>
                <label htmlFor="password">
                  New Password<sup>*</sup>
                </label>
                <div className="password">
                  <input
                    type={view ? "text" : "password"}
                    name="password"
                    onChange={handleChange}
                    value={formdata.password}
                    required
                  />
                  {/* Toggle Password View */}
                  <span onClick={() => setView(!view)}>
                    <i className="fa-regular fa-eye"></i>
                  </span>
                </div>

                {/* Submit Button, disabled while processing */}
                <button type="submit" disabled={loadingSubmitPassword}>
                  {loadingSubmitPassword ? "Submitting..." : "Submit"}
                </button>
              </>
            )}
          </form>

          {/* Error Message */}
          {error && <p className="error-msg">Something went wrong</p>}

          {/* Forgot Password Links */}
          <div className="forgot_bottom">
            <p>
              Don't have an account? <Link href="/register">Register an Account</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
