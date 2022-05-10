import React, {useState, useEffect} from 'react'

const User = () => {
    const [user, setUser] = useState([])

    useEffect (() => {
        fetch('http://localhost:9292/users')
        .then(r=>r.json())
        .then(data => setUser(data))
    }, [])

const renderUser = user.map(atts => {
    return (
        <div key={atts.id}>
            <h1>{atts.username}</h1>
            <img src={atts.profile_picture} alt="My Profile"/>
            <h3>About Me: {atts.bio}</h3>
            <h5>Gender: {atts.gender}</h5>
            <p>Interests: {atts.interests}</p>
            {/* <h4>Age: USER.BIRTDATE BUT USE THE AGE METHOD TO CALCULATE?</h4> */}
        </div>
    )
})

  return (
    <div>
        {renderUser}
    </div>
  )
}

export default User