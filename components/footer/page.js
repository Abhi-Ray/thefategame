import React from "react";
import './index.css';
import Link from "next/link";

export default function Page() {
    return (
        <>
            <footer>
                {/* Footer section one: Company information */}
                <div className="footone">
                    <p>
                        Thefategame is owned and operated by Perfinitum Innovations Pvt Ltd, registration number: , registered address: U47912MP2023PTC067720
                        360 Shiv City, Indore, Madhya Pradesh 452012. Contact us at contact@thefategame.com. Payment agent company is One 97 Communications Limited
                        with address 360 Shiv City, Indore, Madhya Pradesh 452012, and Registration number: U47912MP2023PTC067720
                    </p>
                </div>
                <hr />
                
                {/* Footer section two: Links */}
                <div className="foottwo">
                    {/* Uncomment the line below to add a live support link */}
                    {/* <Link href="/support">Live Support</Link> */}
                    <Link href="/privacy">Privacy Policy</Link>
                    <Link href="/terms">Terms and Conditions</Link>
                </div>
                <hr />
                
                {/* Footer section three: Copyright and social media links */}
                <div className="footthree">
                    <p> &copy; 2024 Thefategame.com | All Rights Reserved.</p>
                    <div className="footer_social">
                        {/* Social media and contact icons */}
                        <Link href="https://t.me/Thefategame"><i className="fa-brands fa-telegram"></i></Link>
                        <Link href="https://www.instagram.com/thefategame?igsh=OHo4aTVjcnk0MHVt"><i className="fa-brands fa-instagram"></i></Link>
                        <Link href="mailto:thefategameofficial@gmail.com"><i className="fa-solid fa-envelope"></i></Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
