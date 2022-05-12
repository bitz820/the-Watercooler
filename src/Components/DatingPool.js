import React from 'react'
import UserCard from './UserCard'

function DatingPool({setDatingPool, datingPool, user}) {

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

    fetch(`http://localhost:9292/likes`, configObj)
      .then(r => r.json())
      .then(data => {
        console.log(data)
        const newArr = datingPool.filter(person => person.id !== id)
        setDatingPool(newArr)
      })
  }



  // Fetch request for Use Effect to pull all people from the pool
const renderDatingPool = datingPool.map(profile => {
return <UserCard 
key={profile.id}
handleClick={addLike}
currentUser={user} 
userInfo={profile}
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