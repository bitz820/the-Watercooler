import React from 'react'
import "../index.css"

function UserCard({ handleClick, userInfo }) {

  return (
    <div className="ui-card"
      key={userInfo.id}>
      <h1>{userInfo.username}</h1>
      <img src={userInfo.profile_picture} alt="My Profile" />
      <h3>About Me: {userInfo.bio}</h3>
      <h5>Gender: {userInfo.gender}</h5>
      <p>Interests: {userInfo.interests}</p>
      <button  onClick={() => handleClick(userInfo.id)} >❤️</button>
        {/* <button  onClick={() => deleteLike(userInfo.id)} >❤️</button> */}
    </div>
  )
}

export default UserCard