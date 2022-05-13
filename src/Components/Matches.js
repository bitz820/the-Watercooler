import React, {useEffect} from 'react'
import UserCard from './UserCard'
import styled from "styled-components"

const StyledTitle = styled.h1`
color: #A3BBAD;
`

const MatchesContainer = styled.div`
    display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px 20px;
  /* padding-left: 50px;
  padding-right: 50px; */
  padding: 100px
`

function Matches({user, matches, setMatches}) {
  console.log(user)
  console.log(user.id)
  useEffect (() => {
    // console.log(user)
    fetch(`http://localhost:9292/users/${user.id}/matches`)
    .then(r=>r.json())
    .then(allMatches => {
      console.log(allMatches)
      // const matchesArr = datingPool.filter
      setMatches(allMatches)
    })
  }, [])

  const deleteLike = (id) => {
    fetch(`http://localhost:9292/likes/${id}`, {method: "DELETE"})
      .then(r => r.json())
      .then(data => {
        console.log(data)
        // filter over data for new arr without this id
        const newArr = matches.filter(profile => profile.id !== id)
        // update state 
        setMatches(newArr)
      })
  }

  
  const renderMatches = matches.map(profile => {
    const buttonText = "destroy(love)"
    return <UserCard 
    buttonText={buttonText}
    matches = {matches} 
    handleClick={deleteLike}
    key={user.id}
    currentUser={user} 
    userInfo={profile}
    />})
    
  return (
    <div>
    <StyledTitle>[me != me]. [me += you].</StyledTitle>
    <MatchesContainer>
      {renderMatches}
    </MatchesContainer>

    </div>
  )
}

export default Matches