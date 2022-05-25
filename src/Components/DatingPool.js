import React, {useState} from 'react'
import DatingCard from './DatingCard'
import styled from "styled-components"
import ControlledCarousel from './CarouselComponent'

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

  const [index, setIndex] = useState(0)
  
  const moveAhead = () => {
    console.log()
    if (index < datingPool.length - 1) {
      setIndex(() => index + 1)
    }else
    setIndex(0) 
  };

  const moveBack = () => {
    if (index > 0){
      setIndex(() => index - 1)}
    else 
    setIndex(datingPool.length - 1)
  };

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
const renderDatingPool = () => {
  let profile = datingPool[index]
  const buttonText = "optimistically render match"
  return (<DatingCard 
    buttonText={buttonText}
    key={profile.id}
    handleClick={addLike}
    currentUser={user} 
    userInfo={profile}
    matches={matches}
  />
  )
}


  return (
      
  <div>
    <StyledTitle> You had me at "Hello World."</StyledTitle>
    <DatingContainer>
      <button onClick={moveBack}>Previous</button>
        {renderDatingPool()}
        <button onClick={moveAhead}>Next</button>
    </DatingContainer>
  </div>

  )
}

export default DatingPool