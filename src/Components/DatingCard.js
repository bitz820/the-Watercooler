import React from 'react'
import styled from "styled-components"


const StyledImg = styled.img`
border: 10px solid #0E3B43;
max-width: 250px;
max-height: 300px;
`
const StyledButton = styled.button`
padding: 20px;
font-size: 15px;
background-color: #0E3B43;
color: white;
font-size: 20px;
border-radius: 60px;
`

function DatingCard({userInfo, handleClick, buttonText}) {
  return (
    <div key={userInfo.id}>
      <h1>{userInfo.username}</h1>
      <StyledImg src={userInfo.profile_picture} alt="My Profile" />
      <h2>{userInfo.pickup_line}</h2>
      <StyledButton  onClick={() => handleClick(userInfo.id)}>{buttonText}</StyledButton>


    </div>
  )
}

export default DatingCard