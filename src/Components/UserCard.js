import React, {useState} from 'react'
import "../index.css"

function UserCard({ userInfo, currentUser, datingPool, setDatingPool }) {
  console.log(userInfo)
  const [liked, setLiked] = useState(false)


  const addLike = (id) => {

    const newLike = {
      user_id: currentUser.id,
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
        setLiked(!liked)
      })
  }

  const deleteLike = (id) => {
    fetch(`http://localhost:9292/likes/${id}`, {method: "DELETE"})
    // patch? with setting user_id as null
      .then(r => r.json())
      .then(data => {
        console.log(data)
        setLiked(!liked)
        // filter over data for new arr without this id
        // update state 
      })
  }

  return (
    <div className="ui-card"
      key={userInfo.id}>
      <h1>{userInfo.username}</h1>
      <img src={userInfo.profile_picture} alt="My Profile" />
      <h3>About Me: {userInfo.bio}</h3>
      <h5>Gender: {userInfo.gender}</h5>
      <p>Interests: {userInfo.interests}</p>
      {/* <h4>Age: USER.BIRTDATE BUT USE THE AGE METHOD TO CALCULATE?</h4> */}
      {liked ? (
        <button className="ui-card emoji-button favorite active" onClick={() => deleteLike(userInfo.id)} >❤️</button>
      ) : (
        <button className="ui-card emoji-button favorite" onClick={() => addLike(userInfo.id)} >♡</button>
      )}
    </div>
  )
}

export default UserCard