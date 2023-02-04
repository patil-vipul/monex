import React, { useEffect } from "react";
import { Input,Icon,Pressable,Button,Box,Text,Link, } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik'
import post from '../libraries/post'
import {getStore, setStore} from "../libraries/store";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Registration({ navigation }) {
 
  useEffect(()=>{
    getStore('userLoggedIn').then((value)=>{
      if(value) navigation.navigate('Home')
      else{
        navigation.navigate('Login')
      }
    })
    //checkUserLoggedIn()
  },[])

  return (
    <Box bg="#2563EB" h="100%" display="flex" flexDirection="column" alignItems={'center'} justifyContent="center">
      <Text margin="24px" fontSize="38px" fontStyle={'italic'} fontWeight="medium" color="#FAFAFA">moneXpensify</Text>
    </Box>

  );
}
