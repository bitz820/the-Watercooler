import React, {useState} from 'react'
import "../index.css"

function UserCard({userInfo}) {
  console.log(userInfo)
  const [liked, setLiked] = useState( false )

  const toggleLike = () => {
    setLiked( !liked )
  }
  return (
    <div className="ui-card"
        key={userInfo.id}>
            <h1>{userInfo.username}</h1>
            <img src={userInfo.profile_picture} alt="My Profile"/>
            <h3>About Me: {userInfo.bio}</h3>
            <h5>Gender: {userInfo.gender}</h5>
            <p>Interests: {userInfo.interests}</p>
            {/* <h4>Age: USER.BIRTDATE BUT USE THE AGE METHOD TO CALCULATE?</h4> */}
            {liked ? (
          <button className="ui-card" onClick={toggleLike} className="emoji-button favorite active">❤️</button>
        ) : (
          <button className="ui-card" onClick={toggleLike} className="emoji-button favorite">♡</button>
        )}
    </div>
  )
}

export default UserCard