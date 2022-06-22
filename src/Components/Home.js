import React from 'react'
import watercooler from "../media/watercooler.gif"


function Home() {
    return (
        <div className='home__container'>
            <h1>the water cooler.</h1>
            <h3>a dating app for devs </h3>
            <img src={watercooler} alt="the watercooler" />
            <p>We aim to create a safe space for Devs to find love.  Feel free to poke around.  We know you will find someone with the source code to your heart </p>
        </div>
    )
}

export default Home