import React from 'react'

function UserCard({userInfo}) {
  return (
    <div key={userInfo.id}>
            <h1>{userInfo.username}</h1>
            <img src={userInfo.profile_picture} alt="My Profile"/>
            <h3>About Me: {userInfo.bio}</h3>
            <h5>Gender: {userInfo.gender}</h5>
            <p>Interests: {userInfo.interests}</p>
            {/* <h4>Age: USER.BIRTDATE BUT USE THE AGE METHOD TO CALCULATE?</h4> */}
    </div>
  )
}

export default UserCard