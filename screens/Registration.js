import React, { useEffect } from "react";
import {
  VStack,
  Input,
  Icon,
  Pressable,
  Center,
  Button,
  Box,
  Link,
} from "native-base";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";

export default function Signup({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordc, setPasswordc] = React.useState(null);


  useEffect(() => {
    //  setEmail('bhavesh')
  }, []);

  const auth = getAuth();

  function createUser(name, email, password, phone) {
    createUserWithEmailAndPassword(auth, name, email, password, phone)
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

  // createUser("byeole80@gmail.com", "passwe122")
  // loginUser("byeole80@gmail.com", "passwe122")

  function Signupp() {
    console.log("Login Success");
    console.log(name, phone, email, password);
    createUser(name, phone, email, password);
  }

  return (
    <Center h="100%" bg="white">
      <VStack space={4} alignItems="center" w="100%">
        <VStack space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            value={name}
            onChange={(el) => {
              setName(el.target.value);
            }}
            placeholder="Name"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="person" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            value={phone}
            onChange={(el) => {
              setPhone(el.target.value);
            }}
            placeholder="Phone Number"
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="phone" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
          />

          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            value={email}
            onChange={(el) => {
              setEmail(el.target.value);
            }}
            InputLeftElement={
              <Icon
                as={<MaterialIcons name="email" />}
                size={5}
                ml="2"
                color="muted.400"
              />
            }
            placeholder="Email Id"
          />

          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            value={password}
            onChange={(el) => {
              setPassword(el.target.value);
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Password"
          />
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            value={passwordc}
            onChange={(el) => {
              setPasswordc(el.target.value);
              validate: value =>
            value === password.current || "The passwords do not match"
            }}
            type={show ? "text" : "password"}
            InputRightElement={
              <Pressable onPress={() => setShow(!show)}>
                
                <Icon
                  as={
                    <MaterialIcons
                      name={show ? "visibility" : "visibility-off"}
                    />
                  }
                  size={5}
                  mr="2"
                  color="muted.400"
                />
              </Pressable>
            }
            placeholder="Re-Enter Password"
          />
        </VStack>
        <Box alignItems="center">
          <Button onPress={() => Signupp()}>Signup</Button>
        </Box>
        <Box alignItems="center">
          <Link href="login2.js">Already have an account ? Log In</Link>
        </Box>
      </VStack>
    </Center>
  );
}
