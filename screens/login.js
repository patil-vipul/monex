import React from "react";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  Button,
  Box,
  Link,
} from "native-base";
import { VStack } from "native-base";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

import { MaterialIcons } from "@expo/vector-icons";


const Inputt = () => {
  const [show, setShow] = React.useState(false);
  const auth = getAuth();
  function CreateUser(email, password) {

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

        // ..
      });
  }
  function LoginUser(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);

      });
  }
  //   CreateUser("byeole80@gmail.com", "passwe122")
  // LoginUser("byeole80@gmail.com", "passwe122")
  function Login() {
    console.log('Login Success')
  }
  return (
    <VStack space={4} w="100%" alignItems="center">
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        InputLeftElement={
          <Icon
            as={<MaterialIcons name="person" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Name"
      />
      <Input
        w={{
          base: "75%",
          md: "25%",
        }}
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
        placeholder="Password"
      />
    </VStack>
  );
};


const ButtonSubmit = () => {
  //sdf
  return (
    <Box alignItems="center">
      <Button onPress={() => Login}>Login</Button>
    </Box>
  );
};

const Forgot = () => {
  //ghf
  return (
    <Box alignItems="center">
      <Link href="https://nativebase.io">Forgot Password ?</Link>
    </Box>
  );
};

export default () => {

  //df


  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <VStack space={4} alignItems="center" w="1000">
          <Inputt />
          <ButtonSubmit />
          <Forgot />
        </VStack>
      </Center>
    </NativeBaseProvider>
  );
};
