import {
  Text,
  Box,
  HStack,
  Button,
  ChevronLeftIcon,
  VStack,
  Badge,
  Divider,
  AlertDialog,
  Alert,
  useToast,
} from "native-base";
import moment from "moment";
import { useRef, useState } from "react";
import get from "../libraries/get";
import Home from "./Home";
import { async } from "@firebase/util";
export default function TransactionDetails({ navigation, route }) {
  const transaction = route.params.transaction;
  const [isOpen, setIsOpen] = useState(false);
  const toast = useToast();

  const onClose = async () => {
    // setIsOpen(false);
    console.log("deleting transaction ", transaction._id);
    var deleted = await get(
      `http://localhost:3333/transaction/delete/${transaction._id}`
    );
    deleted = await deleted.json();

    if (deleted.success) {
      toast.show({
        render: () => {
          return (
            <Alert variant="subtle" bg="#BFDBFE">
              <HStack space={2} flexShrink={1} alignItems="center">
                <Alert.Icon />
                <Text>Transaction deleted!</Text>
              </HStack>
            </Alert>
          );
        },
      });
      navigation.navigate("Home");
    }
  };
  return (
    <Box bg="#fff" h="100%" padding="24px">
      <HStack alignItems="center">
        <Button
          rounded="50"
          padding="0"
          onPress={() => navigation.goBack()}
          variant="ghost"
        >
          <ChevronLeftIcon></ChevronLeftIcon>
        </Button>
        <Text fontSize={"20px"} marginLeft="24px">
          Transaction Details
        </Text>
      </HStack>
      <VStack mt="24px" alignItems={"center"}>
        <Text fontSize={"36px"}>₹{transaction.amount.$numberDecimal}</Text>
        <Badge mt="24px" colorScheme={transaction.type ? "success" : "error"}>
          {transaction.type ? "Credited" : "Debited"}
        </Badge>
        <Divider width={"50%"} mt="24px"></Divider>
        <Text mt="24px">
          {moment(transaction.createdAt).format("DD MMM YYYY HH:mm A")}
        </Text>
      </VStack>
      <Box
        mt="24px"
        padding={"16px"}
        rounded="5"
        style={{ borderColor: "#DBDBDB", borderWidth: "1px" }}
      >
        <Text fontWeight={"medium"}>Description</Text>
        <Text color={"#404040"}>{transaction.memo}</Text>
      </Box>
      <HStack
        left="0"
        right="0"
        padding="24px"
        position={"absolute"}
        bottom="0"
      >
        <Button
          variant={"outline"}
          borderColor="#DC2626"
          colorScheme="error"
          flexGrow={"1"}
          marginRight="8px"
          onPress={() => setIsOpen(true)}
        >
          Delete
        </Button>
        <Button
          variant={"outline"}
          borderColor="#000"
          colorScheme="black"
          flexGrow={"1"}
          marginLeft="8px"
        >
          Edit
        </Button>
      </HStack>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.Header>Delete</AlertDialog.Header>
          <AlertDialog.Body>Are you sure you want to delete ?</AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button
                variant="unstyled"
                colorScheme="coolGray"
                onPress={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button colorScheme="danger" onPress={onClose}>
                Delete
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  );
}
