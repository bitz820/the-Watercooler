import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = ({ setisLoggedIn, isLoggedIn }) => {

  const [loginData, setLoginData] = useState({
    user: "",
    pass: ""
  })

  const history = useHistory()

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const onLogin = (e) => {
    e.preventDefault()
    setisLoggedIn(true)
    history.push("/")
  }

  const userIsLoggedIn = (
    <div className="login__div">
      <h3>Back to the cubicle...?</h3>
      <br/>
      <h3>clicking below will log you out</h3>
      <br/>
      <br/>
      <br/>
      <img src="https://thumbs.gfycat.com/GenerousBouncyHapuku-size_restricted.gif" alt="bye now" />
      <button className="logout__button" onClick={() => setisLoggedIn(false)}>Log Out</button>
    </div>
  )



  const FormField = (
    <form className='form' onSubmit={onLogin}>
      <label>Username</label>
      <br/>
      <input onChange={handleChange} type="text" name="user" required />
      <br/>
      <br/>
      <br/>
      <label>Password</label>
      <br/>
      <input onChange={handleChange} type="password" name='pass' required />
      <br/>
      <br/>
      <br/>
      <input className='logout__button' type="submit" />
    </form >
  )


  return (
    <>
      {isLoggedIn ? null : <h3> please setIsLoggedIn(true)...</h3>}
    <div className="login__div">
      {isLoggedIn ? userIsLoggedIn : FormField}
    </div>
    </>
  )
}

export default Login