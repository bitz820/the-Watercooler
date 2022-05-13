import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from "react-native"
import styled from "styled-components"

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7)

const StyledButton = styled.button`
padding: 20px;
font-size: 15px;
background-color: #0E3B43;
color: white;
font-size: 20px;
border-radius: 60px;
`

const CarouselCardItem = ({ handleClick, userInfo, matches, buttonText }) => {
  return (
    <View style={styles.container}
      key={userInfo.id}>
      <Text style={styles.header}>{userInfo.username}</Text>
      <Image src={userInfo.profile_picture} alt="My Profile" style={styles.image}/>
      <Text style={styles.body}>{userInfo.pickup_line}</Text>
    <Text style={styles.body}>about: {userInfo.bio}</Text>
    <Text style={styles.body}> interested_in: {userInfo.interested_in}</Text>
    <Text style={styles.body}>hobbies: {userInfo.interests}</Text>
    <StyledButton  onClick={() => handleClick(userInfo.id)}>{buttonText}</StyledButton>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    width: ITEM_WIDTH,
    paddingBottom: 40,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: ITEM_WIDTH,
    height: 300,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20
  },
  body: {
    color: "#222",
    fontSize: 18,
    paddingLeft: 20,
    // paddingLeft: 20,
    paddingRight: 20
  }
})

export default CarouselCardItem
