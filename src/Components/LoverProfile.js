import React, {useState, useEffect} from 'react'
import LoverCard from './LoverCard'

function LoverProfile() {

const [allLoverDetails, setAllLoverDetails] = useState([])

useEffect (() => {
  fetch("http://localhost:9292/lovers")
  .then(r=>r.json())
  .then(data => {
    console.log(data)
    setAllLoverDetails(data)
  })
}, [])

const renderLoverCards = allLoverDetails.map(item => <LoverCard key={item.id} details={item}/> )

  return (
<div>  
  {renderLoverCards}
</div>
)}

export default LoverProfile