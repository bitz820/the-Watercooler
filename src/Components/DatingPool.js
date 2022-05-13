import React from 'react'
import UserCard from './UserCard'
import styled from "styled-components"

const StyledTitle = styled.h1`
color: #A3BBAD;
`


const DatingContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 100px;
  gap: 10px 20px;
`

function DatingPool({setDatingPool, datingPool, user, matches}) {

  const addLike = (id) => {

    const newLike = {
      user_id: user.id,
      liked_user_id: id
    }
    const configObj = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      }, body: JSON.stringify(newLike)
    }

    fetch(`http://localhost:9292/likes`, configObj)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        const newArr = datingPool.filter(person => person.id !== id)
        setDatingPool(newArr)
        console.log(matches)

        // if (matches.find(person => person.id === ))
      })
  }



  // Fetch request for Use Effect to pull all people from the pool
const renderDatingPool = datingPool.map(profile => {
  const buttonText = "optimistically render match"
return <UserCard 
buttonText={buttonText}
key={profile.id}
handleClick={addLike}
currentUser={user} 
userInfo={profile}
matches={matches}
/>})
// Map through people that havent been liked by user yet, and and render a card for each.
// State.map(profile => <UserCard data={profile} />


  return (
      
  <div>
    <StyledTitle> You had me at "Hello World."</StyledTitle>
    <DatingContainer>
      {renderDatingPool}
    </DatingContainer>
  </div>

  )
}

export default DatingPool