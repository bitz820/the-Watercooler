import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

const ActiveProfile = ({user}) => {
    


  return (
    <div>
    <UserCard userInfo={user}/>
    </div>
  )
}

export default ActiveProfile