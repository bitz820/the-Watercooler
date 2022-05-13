import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from "styled-components"
import greeting from "../media/greeting.gif"

const Title = styled.div`
    font-size: 60px;
    text-align: center;
    /* padding: 20px; */
    /* background: #312509; */
    border-radius: 25%;
    /* border: 6px solid #312509; */
`
const LoginDiv = styled.div`
    color: rgb(250, 252, 247);
    display: flex;
    flex-flow: column;
    background-color: #0E3B43;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 440px;
    border-radius: 25%;

`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
    margin: 30px;
`
const HeaderDiv = styled.div`
color: rgb(250, 252, 247);
    display: flex;
    flex-flow: column;
    background-color: #0E3B43;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    max-width: 440px;
    /* padding: 30px; */
    border-radius: 30%;
    `

const StyledBtn = styled.button`
  padding: 20px;
  font-size: 30px;
  font-weight: bold;
  border-radius: 20%;
  background-color: #0E3B43;
  color: #A3BBAD;
`

const StyledImg = styled.img`
border-radius: 15%;
border: 7px solid #0E3B43;
`

const Login = ({ setisLoggedIn, isLoggedIn }) => {

  // const [errorMessages, setErrorMessages] = useState({})
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
    <HeaderDiv>
      <p>You are already Logged In! Click Below to Log Out!</p>
      <StyledBtn onClick={() => setisLoggedIn(false)}>Log Out</StyledBtn>
    </HeaderDiv>
  )



  const FormField = (
    <Form onSubmit={onLogin}>
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
      <input type="submit" />
    </Form>
  )


  return (
    <LoginDiv className="login-form">
      <Title>{isLoggedIn ? "Sign Out?" : <StyledImg src={greeting} alt="Hello from water cooler" />}</Title>
      {isLoggedIn ? null : <h3> please setIsLoggedIn(true)...</h3>}
      {isLoggedIn ? userIsLoggedIn : FormField}
    </LoginDiv>
  )
}

export default Login