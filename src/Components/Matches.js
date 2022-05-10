import React, {useState, useEffect} from 'react'

function Matches() {
  const [isAMatch, setIsAMatch] = useState([])

  useEffect (() => {
    fetch("http://localhost:9292/lovers")
    .then(r=>r.json())
    .then(data => {
      console.log(data)
      setIsAMatch(data)
    })
  }, [])

  const determineLovers = isAMatch.filter(lover => lover.wants_a_date === true)

  console.log(determineLovers)
  



  return (
    <div>Match</div>
  )
}

export default Matches