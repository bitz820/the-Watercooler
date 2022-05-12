import React from 'react'
import UserCard from './UserCard'

function DatingPool({setDatingPool, datingPool, user, setLiked, liked}) {



  // Fetch request for Use Effect to pull all people from the pool
const renderDatingPool = datingPool.map(profile => {
return <UserCard 
currentUser={user} 
liked={liked} 
setLiked={setLiked} 
userInfo={profile}
datingPool={datingPool}
setDatingPool={setDatingPool}
/>})
// Map through people that havent been liked by user yet, and and render a card for each.
// State.map(profile => <UserCard data={profile} />


  return (
    <div>All potential matches here

      {renderDatingPool}
    </div>
  )
}

export default DatingPool