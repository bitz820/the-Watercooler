import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

function Matches() {
  const [isAMatch, setIsAMatch] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/matches")
    .then(r=>r.json())
    .then(data => {
      console.log(data)
      setIsAMatch(data)
    })
  }, [])

  const determineMatches = isAMatch.filter(lover => <UserCard data={lover}/>)

  console.log(determineMatches)
  



  return (
    <div>Render Matches here
      {determineMatches}
    </div>
  )
}

export default Matches