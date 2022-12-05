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

export default function Menu({ navigation }) {
  const [clickable, setClickable] = React.useState(false);

  return (
    <Box padding="24px" backgroundColor="white">
      <Box
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        marginBottom="10px"
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
        _light={{
          backgroundColor: "gray.50",
        }}
      >
        <Box>
          <AspectRatio w="100%" ratio={16 / 9}>
            <Image
              source={{
                uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg",
              }}
              alt="image"
            />
          </AspectRatio>
          <Center
            bg="violet.500"
            _dark={{
              bg: "violet.400",
            }}
            _text={{
              color: "warmGray.50",
              fontWeight: "700",
              fontSize: "xs",
            }}
            position="absolute"
            bottom="0"
            px="3"
            py="1.5"
          >
            PHOTOS
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              The Garden City
            </Heading>
            <Text
              fontSize="xs"
              _light={{
                color: "violet.500",
              }}
              _dark={{
                color: "violet.400",
              }}
              fontWeight="500"
              ml="-0.5"
              mt="-1"
            >
              The Silicon Valley of India.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Bengaluru (also called Bangalore) is the center of India's high-tech
            industry. The city is also known for its parks and nightlife.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
              <Text
                color="coolGray.600"
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                6 mins ago
              </Text>
            </HStack>
          </HStack>
        </Stack>
      </Box>
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
