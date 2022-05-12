import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

function Matches({user, setLiked, liked, datingPool, setDatingPool}) {
  const [isAMatch, setIsAMatch] = useState([])
  console.log(user)
  console.log(user.id)
  useEffect (() => {
    // console.log(user)
    fetch(`http://localhost:9292/users/${user.id}/matches`)
    .then(r=>r.json())
    .then(data => {
      console.log(data)
      setIsAMatch(data)
    })
  }, [])

  const determineMatches = isAMatch.map(profile => {
    return <UserCard 
    currentUser={user} 
    liked={liked} 
    setLiked={setLiked} 
    userInfo={profile}
    datingPool={datingPool}
    setDatingPool={setDatingPool}
    />})
    

  console.log(determineMatches)

  return (
    <div>Render Matches here
      {determineMatches}
    </div>
  )
}

export default Matches