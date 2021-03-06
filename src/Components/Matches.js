import React, { useEffect } from 'react'
import MatchesCard from './MatchesCard'
import styled from "styled-components"

const StyledTitle = styled.h1`
color: #A3BBAD;
`

const MatchesContainer = styled.div`
  display: flex;
  /*flex-flow: wrap;*/
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 10px 20px;
  /* padding-left: 50px;
  padding-right: 50px; */
  padding: 100px;
`

function Matches({ user, matches, setMatches }) {
  useEffect(() => {
    fetch(`https://the-water-cooler-back-end.herokuapp.com/users/${user.id}/matches`)
      .then(r => r.json())
      .then(allMatches => {
        console.log(allMatches)
        setMatches(allMatches)
      })
  }, [])

  const deleteLike = (id) => {
    fetch(`https://the-water-cooler-back-end.herokuapp.com/likes/${id}`, { method: "DELETE" })
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
    return <MatchesCard
      buttonText={buttonText}
      matches={matches}
      handleClick={deleteLike}
      key={profile.id}
      currentUser={user}
      userInfo={profile}
    />
  })

  return (
    <div>
      <h1 className="title">[me != me]. [me += you].</h1>
      <div className="match__container">
        {renderMatches}
      </div>

    </div>
  )
}

export default Matches