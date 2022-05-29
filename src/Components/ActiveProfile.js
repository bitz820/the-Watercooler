import React, { useState } from 'react'
import Input from './Input'
import styled from "styled-components"

const ProfileDiv = styled.div`
display: flex;
justify-content: space-evenly;
`
const StyledProfileCard = styled.div`
display: flex;
flex-flow: column wrap;
justify-content: space-between;
align-items: center;
background: #0E3B43;
color: white;
border: 10px solid #A3BBAD ;
border-radius: 10%;
padding: 10px;
margin-bottom: 100px;
`
const StyledForm = styled.form`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
color: #312509;
font-size: 25px;
background: #A3BBAD;
border: 10px solid #0E3B43;
border-radius: 10%;
padding: 10px;
margin-bottom: 100px;
`
const StyledTitle = styled.h1`
color: #A3BBAD;
`

const ActiveProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    password: user.password,
    profile_picture: user.profile_picture,
    bio: user.bio,
    interested_in: user.interested_in,
    interests: user.interests,
    pickup_line: user.pickup_line
  })

  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    const name = e.target.name
    let value = e.target.value

    setFormData({
      ...formData,
      [name]: value
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // start Patch request
    const configObj = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    }

    fetch(`https://the-water-cooler-back-end.herokuapp.com/users/${user.id}`, configObj)
      // fetch(`http://localhost:9292/users/${id}`)
      .then(r => r.json())
      .then(data => {
        setUser(data)
        setFormData(formData)
      }
      )
  }

  return (<>
    <StyledTitle> You auto-complete me. </StyledTitle>
    <ProfileDiv>
      <StyledProfileCard>
        <h1>your_full_name: {formData.name}</h1>
        <h2>username: {formData.username}</h2>
        <h3>pickup_line: {formData.pickup_line}</h3>
        <h2>password: {formData.password}</h2>
        <img src={formData.profile_picture} alt="My Profile" />
        <h3>interested_in: {formData.interested_in}</h3>
        <h3>about: {formData.bio}</h3>
        <p>interests: {formData.interests}</p>
      </StyledProfileCard>
      <StyledForm onSubmit={handleSubmit}>
        <h3>Update your profile here!</h3>
        full_name
        <Input
          name="name"
          type="text"
          value={formData.name}
          placeholder={"Your name"}
          handleInput={handleInput}
        />
        <br />
        user_name
        <Input
          name="username"
          type="text"
          value={formData.username}
          placeholder={"Your username"}
          handleInput={handleInput}
        />
        <br />
        password
        <Input
          name="password"
          type="password"
          value={formData.password}
          placeholder={"Your password"}
          handleInput={handleInput}
        />
        pickup_line
        <Input
          name="pickup_line"
          type="pickup_line"
          value={formData.pickup_line}
          placeholder={"Your pickup_line"}
          handleInput={handleInput}
        />
        <br />
        profile_picture
        <Input
          name="profile_picture"
          type="profile_picture"
          value={formData.profile_picture}
          placeholder={"Your profile_picture"}
          handleInput={handleInput}
        />
        <br />
        interested_in
        <Input
          name="interested_in"
          type="text"
          value={formData.interested_in}
          placeholder={"Your interested_in"}
          handleInput={handleInput}
        />
        <br />
        bio
        <Input
          name="Bio"
          type="text"
          value={formData.bio}
          placeholder={"Your bio"}
          handleInput={handleInput}
        />
        <br />
        hobbies
        <Input
          name="Interests"
          type="text"
          value={formData.interests}
          placeholder={"Your interests"}
          handleInput={handleInput}
        />
        <br />
        <input type="submit" value="Update" />
      </StyledForm>
    </ProfileDiv>

  </>
  )
}

export default ActiveProfile