import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

function Matches({user}) {
  const [isAMatch, setIsAMatch] = useState([])
  console.log(user)
  useEffect (() => {
    // console.log(user)
    fetch(`http://localhost:9292/users/${user.id}/matches`)
    .then(r=>r.json())
    .then(data => {
      console.log(data)
      setIsAMatch(data)
    })
  }, [])

  const determineMatches = isAMatch.map(lover => <UserCard userInfo={lover}/>)

  console.log(determineMatches)

  return (
    <div>Render Matches here
      {determineMatches}
    </div>
  )
}

export default Matches