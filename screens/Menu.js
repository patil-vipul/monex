import React, { useEffect, useState } from "react";
import { Box, HStack, Text, Button, Image, VStack, Pressable } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { getStore } from "../libraries/store";

function Profile({ navigation }) {
  var [email, setEmail] = useState(null);
  var [isEmailLoaded, setIsEmailLoaded] = useState(false);
  var [avatar, setAvatar] = useState(null);
  useEffect(() => {
    async function fetchEmail() {
      let user = await getStore("user");
      if (user.email) {
        setEmail(user.email);
        setAvatar(Array.from(user.email)[0]);
        setIsEmailLoaded(true);
      }
    }
    fetchEmail();
  }, []);
  const profileImage = require("../assets/bsy.jpg")
  return (
    <Box backgroundColor="white" h="100%" display="flex">
      <HStack padding="19px" borderBottomWidth="1" alignItems="center" borderColor="#e6e6e6">
        <Image size={49} borderRadius={100} source={profileImage}></Image>
        <VStack style={styles.profileDetailStack}>
          <Text style={styles.userName}>Vipul Patil</Text>
          <Text style={styles.userEmail}>{email}</Text>
        </VStack>
      </HStack>

      <Box padding="10px" marginTop={'17px'} flexGrow={1}>
        <Pressable>
          <HStack style={styles.menuItem} alignItems={'center'}>
            <MaterialIcons name="person" size={24}></MaterialIcons>
            <Text fontSize={'17px'} ml="10px">Edit Profile</Text>
          </HStack>
        </Pressable>
      </Box>


      <Button variant="unstyled" style={styles.logoutButton}><Text fontSize={'16px'} fontWeight={500}>Logout</Text></Button>
    </Box>
  );
}

const styles = StyleSheet.create({
  userName: {
    fontSize: '19px',
    lineHeight: '1.2em',
    fontWeight: 500
  },
  userEmail: {
    fontSize: '16px',
    lineHeight: '1.2em',
    color: '#737278'
  },
  profileDetailStack: {
    marginLeft: '16px'
  },
  menuItem:{
    borderRadius: '10px',
    backgroundColor: '#F6F6F6',
    paddingTop: '9px',
    paddingBottom: '9px',
    paddingLeft: '12px',
    paddingRight: '12px',

  },
  logoutButton: {
    margin: '10px',
    marginBottom: '20px',
    fontSize : '16px',
    fontWeight: 500,
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderColor:'#E7E7E7',
    borderWidth:'2px',
    borderRadius: '8px',
    shadowColor: "#E7E7E7",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 5,
    elevation: 4
  }
})

export default Profile
