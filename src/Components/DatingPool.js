import React, {useState} from 'react'
import DatingCard from './DatingCard'


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

    fetch(`https://the-water-cooler-back-end.herokuapp.com/likes`, configObj)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        const newArr = datingPool.filter(person => person.id !== id)
        setDatingPool(newArr)
        console.log(matches)
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
      
  <div className="dating__container">
    <h1 className='title'> You had me at "Hello World."</h1>
    <div className='dating__card__container'>
      <button className='btn__style' onClick={moveBack}>Previous</button>
        {renderDatingPool()}
        <button className='btn__style' onClick={moveAhead}>Next</button>
    </div>
  </div>

  )
}

export default DatingPool