import React, {useState, useEffect} from 'react'

const User = () => {
    const [user, setUser] = useState([])

    useEffect (() => {
        fetch('http://localhost:9292/users')
        .then(r=>r.json())
        .then(data => {setUser(data)})
    }, [])

// Const renderUser = <User with PROPS/>
console.log(user)

  return (
    <div>
        <h1>{user.username}</h1>
        <img src={user.profile_picture} alt="My Profile"/>
        <h3>About Me:{user.bio}</h3>
        <h5>Gender: {user.gender}</h5>
        <p>Interests: {user.interests}</p>
        {/* <h4>Age: USER.BIRTDATE BUT USE THE AGE METHOD TO CALCULATE?</h4> */}




    </div>
  )
}

export default User