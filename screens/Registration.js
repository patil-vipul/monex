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
import {ErrorMessage, Formik} from 'formik'

export default function Signup({ navigation }) {
  const [show, setShow] = React.useState(false);
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [phone, setPhone] = React.useState(null);
  const [password, setPassword] = React.useState(null);
  const [passwordc, setPasswordc] = React.useState(null);

  let userRegistrationSchema = yup.object().shape({
    passwordc : yup.string().required().oneOf([yup.ref('password'), null], 'Passwords must match'),
    password :  yup.string().required().min(6),
    email : yup.string().email().required(),
    phone : yup.string().required(), // (2323)23-2323 // +91 928421450 // 02542 2343225
    name : yup.string().required(),
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
    <Formik onSubmit={register} initialValues={{name:'',phone:'',email:'',password:'',passwordc:''}} validationSchema={userRegistrationSchema}>
       {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
      <Center h="100%" bg="white">
      <VStack space={4} alignItems="center" w="100%">

        <VStack space={4} w="100%" alignItems="center">
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            borderColor={errors.name?'red.500':'muted.300'}
            onChangeText={handleChange('name')}
            onBlur={handleBlur('name')}
            value={values.name}
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
          <ErrorMessage  name="name"/>

          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            borderColor={errors.phone?'red.500':'muted.300'}
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
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
          <ErrorMessage name="phone"/>

          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            borderColor={errors.email?'red.500':'muted.300'}
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
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
           <ErrorMessage name="email"/>

          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            borderColor={errors.password?'red.500':'muted.300'}
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
           <ErrorMessage name="password"/>
          <Input
            w={{
              base: "75%",
              md: "25%",
            }}
            borderColor={errors.passwordc?'red.500':'muted.300'}
            onChangeText={handleChange('passwordc')}
            onBlur={handleBlur('passwordc')}
            value={values.passwordc}
            
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
           <ErrorMessage name="passwordc"/>
        </VStack>
        <Box alignItems="center">
          <Button onPress={handleSubmit}>Signup</Button>
        </Box>
        <Box alignItems="center">
          <Link onPress={() => navigation.navigate('login2')}>Already have an account ? Log In</Link>
        </Box>
      
      </VStack>
      </Center>
       )}
    </Formik>
  );
}
