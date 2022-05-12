import React, {useState} from 'react'
import Input from './Input'

const ActiveProfile = ({ user, setUser }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    username: user.username,
    password: user.password,
    bio: user.bio,
    gender: user.gender,
    interests: user.interests
  })

  // setUser({ ...user, [e.target.name]: e.target.value });
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

    fetch(`http://localhost:9292/users/${user.id}`, configObj)
      // fetch(`http://localhost:9292/users/${id}`)
      .then(r => r.json())
      .then(data => {
        setUser(data)
        setFormData(formData)
      }
      )
  }

  return (
    <div>
      <h1>Your Name: {formData.name}</h1>
      <h2>Username: {formData.username}</h2>
      <h2>Password: {formData.password}</h2>
      <img src={user.profile_picture} alt="My Profile" />
      <h5>Gender: {formData.gender}</h5>
      <h3>About Me: {formData.bio}</h3>
      <p>Interests: {formData.interests}</p>
      {/* <h5>Gender: {formData.gender}</h5>
      <h3>About Me: {formData.bio}</h3>
      <p>Interests: {formData.interests}</p> */}

      <form onSubmit={handleSubmit}>
      <Input
          name="name"
          type="text"
          value={formData.name}
          placeholder={"Your name"}
          handleInput={handleInput}
        />
        <br />

        <Input
          name="username"
          type="text"
          value={formData.username}
          placeholder={"Your username"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="password"
          type="password"
          value={formData.password}
          placeholder={"Your password"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="gender"
          type="text"
          value={formData.gender}
          placeholder={"Your gender"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="bio"
          type="text"
          value={formData.bio}
          placeholder={"Your bio"}
          handleInput={handleInput}
        />
        <br />
        <Input
          name="interests"
          type="text"
          value={formData.interests}
          placeholder={"Your interests"}
          handleInput={handleInput}
        />
        <br />


        <input type="submit" value="Update" />
      </form>
    </div>
  )
}

export default ActiveProfile