import React from 'react'
import watercooler from "../media/watercooler.gif"
import styled from "styled-components"

const StyledContainer = styled.div`
display: flex;
flex-flow: column;
justify-content: space-around;
align-items: center;
color: white;
/* padding: 0 */
/* margin: 0; */
min-height: 80vh;
/* margin-top: 100px;
margin-bottom: 100px; */
`
const StyledImg = styled.img`
    height: 400px;
    width: auto;
    margin-top: 30px;
`
const StyledHeader = styled.h1`
font-size: 60px;
`

function Home() {
    return (
        <StyledContainer>
            <div>
            <StyledHeader>the water cooler.</StyledHeader>
            <h3>a dating app for devs </h3>
            <StyledImg src={watercooler} alt="the watercooler" />
            </div>
            <p>We aim to create a safe space for Devs to find love.  Feel free to poke around.  We know you will find someone with the source code to your heart </p>
        </StyledContainer>
    )
}

export default Home