import React from "react";
import {
  Box,
  Center,
  NativeBaseProvider,
  HStack,
  VStack,
  Icon,
  Text,
  Button,
  AddIcon,
  AspectRatio,
  Image,
  Heading,
  Stack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import BalanceCard from "../components/BalanceCard";
import useBalance from "../components/BalanceCard";

export default function Menu({ navigation }) {
  const [clickable, setClickable] = React.useState(false);

  return (
    <Box padding="24px" backgroundColor="white">
      <HStack
        marginBottom="20px"
        shadow={6}
        padding="8px"
        borderWidth="2"
        paddingLeft="16px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <Box>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="xl" ml="-1">
                The Garden City
              </Heading>
            </Stack>

            <Text fontSize="lg" bold>
              {balance}
            </Text>
          </Stack>
        </Box>
      </HStack>
      <HStack
        marginBottom="10px"
        shadow={6}
        padding="8px"
        borderWidth="2"
        paddingLeft="16px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <AddIcon marginRight="16px"></AddIcon>
        <Box>
          <Text fontWeight="500">Settings</Text>
          <Text>This is the text for settings</Text>
        </Box>
      </HStack>
      <HStack
        marginBottom="10px"
        shadow={6}
        padding="8px"
        borderWidth="2"
        paddingLeft="16px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <Box marginRight="16px">
          <MaterialIcons size={30} name="history" />
        </Box>
        <Box>
          <Text fontWeight="500">Transactions</Text>
          <Text>This is the text for settings</Text>
        </Box>
      </HStack>
      <HStack
        marginBottom="10px"
        shadow={6}
        padding="8px"
        borderWidth="2"
        paddingLeft="16px"
        alignItems="center"
        rounded="6px"
        borderColor="trueGray.200"
      >
        <Box marginRight="16px">
          <MaterialIcons size={30} name="settings" />
        </Box>
        <Box>
          <Text fontWeight="500">Settings</Text>
          <Text>This is the text for settings</Text>
        </Box>
      </HStack>
      {/* <HStack  shadow={6}
            borderWidth="2"
            borderColor="trueGray.200">
          <Icon
            as={<MaterialIcons name="settings" />}
            size={33}
            ml="2"
            color="muted.500"
          />
          <Box
            width="300"
            p="5"
           
          >
            <Text>Settings</Text>
            <Text>This is the text for settings</Text>
          </Box>
        </HStack> */}
    </Box>
  );
}
