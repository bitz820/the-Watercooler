import React, {useEffect} from 'react'
import UserCard from './UserCard'

function Matches({user, isAMatch, setIsAMatch}) {
  console.log(user)
  console.log(user.id)
  useEffect (() => {
    // console.log(user)
    fetch(`http://localhost:9292/users/${user.id}/matches`)
    .then(r=>r.json())
    .then(allMatches => {
      console.log(allMatches)
      // const matchesArr = datingPool.filter
      setIsAMatch(allMatches)
    })
  }, [])

  const deleteLike = (id) => {
    fetch(`http://localhost:9292/likes/${id}`, {method: "DELETE"})
      .then(r => r.json())
      .then(data => {
        console.log(data)
        // filter over data for new arr without this id
        const newArr = isAMatch.filter(profile => profile.id !== id)
        // update state 
        setIsAMatch(newArr)
      })
  }

  const renderMatches = isAMatch.map(profile => {
    return <UserCard 
    handleClick={deleteLike}
    key={user.id}
    currentUser={user} 
    userInfo={profile}
    />})
    
  return (
    <div>Render Matches here
      {renderMatches}
    </div>
  )
}

export default Matches