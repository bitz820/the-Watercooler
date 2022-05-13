import React from 'react'
import styled from "styled-components"


const StyledUserCard = styled.div`
    display: flex;
    flex-flow: column;
    flex: 0 1 calc(15% - 1em);
    /* width: -moz-fit-content; */
    /* max-height: 200px; */
    height: fit-content;    
    /* max-height: 300px; */
    border: 10px solid #312509;
    background: #d3bf9f;
    border-radius: 68px;
    font-size: large;
    /* margin: 25px; */
    /* margin-top: 50px; */
    padding: 15px;
    `

const StyledButton = styled.button`
padding: 20px;
font-size: 15px;
background-color: #0E3B43;
color: white;
font-size: 20px;
border-radius: 60px;
`

const StyledImg = styled.img`
border: 10px solid #0E3B43;
`

function UserCard({ handleClick, userInfo, matches, buttonText }) {
  console.log(buttonText)
  console.log(matches)
  console.log(userInfo)


  return (
    <StyledUserCard 
      key={userInfo.id}>
      <h1>{userInfo.username}</h1>
      <StyledImg src={userInfo.profile_picture} alt="My Profile" />
      <h3>About Me: {userInfo.bio}</h3>
      <h5>Gender: {userInfo.gender}</h5>
      <p>Interests: {userInfo.interests}</p>
      <StyledButton  onClick={() => handleClick(userInfo.id)}>{buttonText}</StyledButton>
    </StyledUserCard>
  )
}

export default UserCard