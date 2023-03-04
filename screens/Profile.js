import React from "react";
import styles from "../styles";
import {
  Box,
  HStack,
  Icon,
  Text,
  Button,
  AddIcon,
  Image,
  Heading,
  Stack,
  IconButton,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import email from "../components/Header";

import App from "../App";

export default function Profile({ navigation }) {
  const [clickable, setClickable] = React.useState(false);

  return (
    <Box backgroundColor="white">
      <HStack
        marginBottom="30px"
        shadow={0.5}
        padding="8px"
        borderBottomWidth="2"
        paddingLeft="16px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <Box>
          <Stack p="4" space={3} height="60">
            <HStack>
              <Image
                size={55}
                borderRadius={100}
                marginTop="-3"
                marginLeft="-4"
                source={require("../assets/bsy.jpg")}
                alt="Profile Image"
              ></Image>
              <Stack space={2} marginLeft="-15">
                <Text fontSize="md" paddingLeft="35" marginTop="-1">
                  Bhavesh Yeole
                </Text>
                <Text fontSize="12" paddingLeft="35" marginTop="-3">
                  bsy12345@gmail.com
                </Text>
              </Stack>
            </HStack>
            <Text fontSize="lg" bold>
              {/* <SpendCard></SpendCard> */}
            </Text>
          </Stack>
        </Box>
        {/* <IconButton
          icon={<Icon as={MaterialIcons} name="arrow-forward" />}
          width="8"
          height="8"
          rounded="100%"
          variant="subtle"
          colorScheme="gray"
          shadow={2}
          marginLeft="96px"
          marginTop="-7"
        ></IconButton> */}
      </HStack>

      <HStack
        alignItems="center"
        marginBottom="15px"
        padding="8px"
        marginTop="-5"
        paddingLeft="25px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <Box marginRight="16px">
          <MaterialIcons size={18} name="settings" />
        </Box>
        <Box>
          <Text fontSize="sm">Settings</Text>
        </Box>
      </HStack>
      <HStack
        mb="2.5"
        mt="1.5"
        direction={{
          base: "column",
          md: "row",
        }}
        space={2}
        mx={{
          base: "auto",
          md: "0",
        }}
      >
        <Button
          variant="ghost"
          marginTop="378"
          shadow={2}
          width="350"
          height="50"
          borderWidth="1"
          borderColor="trueGray.100"
        >
          Logout
        </Button>
      </HStack>
    </Box>
  );
}
