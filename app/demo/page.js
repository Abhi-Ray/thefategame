import React from "react"
import Demo from '@/components/demo/page'
import Header from '@/components/header/page'
import Footer from '@/components/footer/page'

export const metadata = {
  title: 'TheFateGame - Thrilling Mines Game Experience | Test Your Luck Now!',
  description: 'TheFateGame offers a heart-pounding, luck-driven gaming experience, inspired by the classic Mines game on Stake.com. Carefully choose safe tiles and avoid the hidden mines to win big! Can you trust your instincts and escape the fate? Play now and put your skills to the test in this simple yet addictive game of strategy and chance.',
  keywords: 'TheFateGame, Mines game, Online casino games, Mines game copy, Luck-based games, Stake.com Mines, Strategy game, Online betting, Win big games, Minefield game'
}

export default function page () {

  return(
    <>
    <Header/>
    <Demo/>
    <Footer/>
    </>
  )
}