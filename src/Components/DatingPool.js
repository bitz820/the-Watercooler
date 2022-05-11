import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

function DatingPool({data}) {



  // Fetch request for Use Effect to pull all people from the pool
const renderDatingPool = data.map(profile => <UserCard userInfo={profile}/>)
// Map through people that havent been liked by user yet, and and render a card for each.
// State.map(profile => <UserCard data={profile} />


  return (
    <div>All potential matches here

      {renderDatingPool}
    </div>
  )
}

export default DatingPool