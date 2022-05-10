import React from 'react'

function LoverCard({details}) {
    const {username, profile_picture, bio, gender, interests, wants_a_date, birthdate} = details
  return (
    <div>
        <h1>Name: {username}</h1>
        {/* NEEDS SPECIAL CONFIG FOR TIME OF BIRTH MINUS DAY TODAY <h2>Age: {birthdate}</h2> */}
        <img src={profile_picture} alt="Match Photo" />
        <h3>Bio: {bio}</h3>
        <h4>Interests: {interests}</h4>
        <h4>Gender: {gender}</h4>
        <button>Like</button>
        <button>Pass</button>


    </div>
  )
}

export default LoverCard