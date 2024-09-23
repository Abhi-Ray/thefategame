"use client"
import React from "react"
import './index.css'
import Link from 'next/link'
import Image from "next/image"
import { useState } from "react"
import Avatar from 'react-avatar';

export default function Page() {
    const [login, setLogin] = useState(true);
    const [show, setShow] = useState(false);

    return (
        <header>
            <div className="header_logo">
                <Link href="/"><Image src="/img/logo.png" alt="the_fate_game_logo" width={150} height={150} /></Link>
            </div>
            <div className="navlink">
                <ul>
                    <li>Active <span><i className="fa-solid fa-circle-dot"></i> 2912</span></li>
                    {login ? (
                        <>
                            <li className="ml-4">
                                <button onClick={() => setShow(!show)} >
                                    <Avatar name="Abhishek Ray" color="#1475e1" round={true} size={50} />
                                </button>
                            </li>
                            {show && (
                                <div className="menu">
                                    <Link href="/Wallet"><button><i class="fa-solid fa-wallet"></i> Wallet</button></Link>
                                    <Link href="/Bet"><button><i class="fa-solid fa-ticket"></i> Bet</button></Link>
                                    <Link href="/Setting"><button><i class="fa-solid fa-gear"></i> Setting</button></Link>
                                    <Link href="/Support"><button><i class="fa-solid fa-headset"></i> Support</button></Link>
                                    <button onClick={() => setLogin(!login)}><i class="fa-solid fa-right-from-bracket"></i> Logout</button>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <li><Link href="/login"><button>Login</button></Link></li>
                            <li><Link href="/register"><button>Register</button></Link></li>
                        </>
                    )}
                </ul>
            </div>
        </header>
    );
}
