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

const StyledDatingCard = styled.div`
  flex:1 1 calc(10% - 1em);
  align-items: center;
  width: 100%;
  height: 100%;    
  /*max-height: 300px;*/
  border: 10px solid #312509;
  background: #d3bf9f;
  border-radius: 68px;
  font-size: large;
  padding: 15px;
`


function DatingCard({userInfo, handleClick, buttonText}) {
  return (
    <StyledDatingCard key={userInfo.id}>
      <h1>{userInfo.username}</h1>
      <StyledImg src={userInfo.profile_picture} alt="My Profile" />
      <h2>{userInfo.pickup_line}</h2>
      <StyledButton  onClick={() => handleClick(userInfo.id)}>{buttonText}</StyledButton>


    </StyledDatingCard>
  )
}

export default DatingCard