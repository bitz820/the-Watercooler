import React from 'react'



function MatchesCard({ handleClick, userInfo, matches, buttonText }) {
  // console.log(buttonText)
  // console.log(matches)
  // console.log(userInfo)

  return (
    <div className='matches__card'
      key={userInfo.id}>
      <div>

        <h2>{userInfo.username}</h2>
        <div className='matches__style'>
          <div>
            <img className='match__img' src={userInfo.profile_picture} alt="My Profile" />
            <p>"{userInfo.pickup_line}"</p>
          </div>
          <div className='match__info'>
            interested_in: <h6>{userInfo.interested_in}</h6>
            hobbies: <h6>{userInfo.interests}</h6>
          </div>
        </div>
      </div>

      <div className='match__bottom'>about: <h6>{userInfo.bio}</h6>
      </div>
        <button className='btn__style' onClick={() => handleClick(userInfo.id)}>{buttonText}</button>
    </div >
  )
}

export default MatchesCard

