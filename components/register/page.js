"use client"
import React, { useState } from "react"
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'
import { useRouter } from 'next/navigation'
import StepOne from './step_one'
import StepTwo from './step_two'
import './index.css'

export default function Page() {
    const [step, setStep] = useState(1); // State to track current step
    const [mobile, setMobile] = useState();

    // Conditionally render components based on the current step
    const renderStep = () => {
        switch (step) {
            case 1:
                return <StepOne setStep={setStep} setMobile={setMobile}/>; // Pass setStep correctly as a prop
            case 2:
                return <StepTwo setStep={setStep} mobile={mobile}/>; // Pass setStep correctly as a prop
            default:
                return <StepOne setStep={setStep} setMobile={setMobile}/>; // Default to StepOne
        }
    };

    return (
        <>
            {/* Render the Header component */}
            <Header />
            
            <div className="register">
                {renderStep()} {/* Call the function to render the current step */}
            </div>

            {/* Render the Footer component */}
            <Footer />
        </>
    );
}
