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
import { password, email, phone, name } from "yup";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from "yup";
import { ErrorMessage, Formik } from "formik";

export default function Login2({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  let userLoginSchema = yup.object().shape({
    password1: yup.string().required().min(6),
    email1: yup.string().email().required(),
  });

  useEffect(() => {
    //  setEmail('bhavesh')
  }, []);

  const auth = getAuth();

  function createUser(email, password) {
    createUserWithEmailAndPassword(auth, email1, password1)
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

  function loginUser(email, password) {
    signInWithEmailAndPassword(auth, email1, password1)
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

  // createUser("byeole80@gmail.com", "passwe122")
  // loginUser("byeole80@gmail.com", "passwe122")

  function login() {
    console.log("Login Success");
    console.log(email, password);
    loginUser(email, password);
  }

  return (
    <Formik
      onSubmit={loginUser}
      initialValues={{ email1: "", password1: "" }}
      validationSchema={userLoginSchema}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <Center h="100%" bg="white">
          <VStack space={4} alignItems="center" w="100%">
            <VStack space={4} w="100%" alignItems="center">
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                borderColor={errors.email1 ? "red.500" : "muted.300"}
                onChangeText={handleChange("email1")}
                onBlur={handleBlur("email1")}
                value={values.email1}
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="person" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="Email"
              />
              <Input
                w={{
                  base: "75%",
                  md: "25%",
                }}
                borderColor={errors.password ? "red.500" : "muted.300"}
                onChangeText={handleChange("password1")}
                onBlur={handleBlur("password1")}
                value={values.password1}
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
            </VStack>
            <Box alignItems="center">
              <Button onPress={() => login()}>Login</Button>
            </Box>
            <Box alignItems="center">
              <Link href="https://nativebase.io">Forgot Password ?</Link>
            </Box>
          </VStack>
        </Center>
      )}
    </Formik>
  );
}
