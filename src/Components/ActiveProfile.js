import React, {useState, useEffect} from 'react'
import UserCard from './UserCard'

const ActiveProfile = () => {
    const [user, setUser] = useState([])

    useEffect (() => {
      // fetch(`http://localhost:9292/users/${user.id}`)
      fetch(`http://localhost:9292/users`)
      .then(r=>r.json())
      .then(data => setUser(data))
    }, [])

const renderUser = user.map(detail => <UserCard userInfo={detail}/>)

  return (
    <div>
        {renderUser}
    </div>
  )
}

export default ActiveProfile