import React, { useEffect } from "react";
import {
  VStack,
  Input,
  Icon,
  Pressable,
  Center,
  Button,
  Box,
  Text,
  Link,
} from "native-base";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { MaterialIcons } from "@expo/vector-icons";
import * as yup from 'yup';
import { ErrorMessage, Formik } from 'formik'

export default function Signup({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [email, setEmail] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  let userRegistrationSchema = yup.object().shape({
    password: yup.string().required("Please enter a password").min(6),
    email: yup.string().email().required("Email is required"),
  });


  useEffect(() => {
    //  setEmail('bhavesh')
  }, []);
  // validate: value =>
  // value === password.current || "The passwords do not match"
  const auth = getAuth();

  // function createUser(email, password) {


  //   return createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       console.log(user);
  //       return "bhavesh";
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log(errorMessage);
  //       // ..
  //     });
  // }
  async function register(values) {
    console.log('Creating firebase user')
    var fbObject = await createUserWithEmailAndPassword(auth, values.email, values.password);
    var userID = fbObject.user.uid;

    //res = (uid, name, email, pass, phone)
    //res == true
    //to homepage
    //error show 
  }

  return (
    <Box bg="#2563EB" h="100%" display="flex" flexDirection="column">
      <Text margin="24px" fontSize="28px" fontWeight="medium" color="#FAFAFA">Sign Up</Text>
      <Box h="100%" bg="#FAFAFA" padding="24px" borderTopLeftRadius="25px" borderTopRightRadius="25px">
        <Formik onSubmit={register} initialValues={{  email: '', password: ''}} validationSchema={userRegistrationSchema}>
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <Box  h="100%">
              <Box>
                <Input
                  borderColor={errors.email ? 'red.500' : 'muted.300'}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  placeholder="Email"
                />
                <Box mt="2px" fontSize="sm" color="red.400">
                  <ErrorMessage name="email" />
                </Box>
              </Box>

              <Box mt="16px">
                <Input
                  borderColor={errors.password ? 'red.500' : 'muted.300'}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
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
                <Box mt="2px" fontSize="sm" color="red.400">
                  <ErrorMessage name="password" />
                </Box>
              </Box>

              <Button mt="24px" bg="#2563EB" onPress={handleSubmit}>Register</Button>

              <Link mt="24px" onPress={() => navigation.navigate('login2')}>Login</Link>

            </Box>
          )}
        </Formik>
      </Box>
    </Box>

  );
}
