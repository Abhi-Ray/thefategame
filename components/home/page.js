"use client"
import React from "react"
import Image from 'next/image'
import {useRouter} from "next/navigation"
import './index.css'

export default function Home (){
 const router = useRouter();
 setTimeout(()=>{
 router.push("/demo");
 },1000)

    return(
       <div className="home">
        <div className="home_hero_one">
          <img src="/img/home_background.jpeg" className="background_image" alt="homepage_background_image" />
        </div>
        <img src="/img/home_hero.png" className="home_hero_two" alt="homepage_center_image" />
       </div>
    )
}
