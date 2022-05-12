import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

function Matches({user, setLiked, liked, datingPool, setDatingPool}) {
  const [isAMatch, setIsAMatch] = useState([])
  console.log(liked)
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

  const renderMatches = isAMatch.map(profile => {
    return <UserCard 
    currentUser={user} 
    liked={liked} 
    setLiked={setLiked} 
    userInfo={profile}
    datingPool={datingPool}
    setDatingPool={setDatingPool}
    />})
    
  return (
    <div>Render Matches here
      {renderMatches}
    </div>
  )
}

export default Matches