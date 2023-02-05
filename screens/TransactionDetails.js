import {  Text, Box, HStack, Button, ChevronLeftIcon, VStack, Badge, Divider } from "native-base";
import moment from "moment";
export default function TransactionDetails({ navigation, route }) {
    const transaction = route.params.transaction
    return (
        <Box bg="#fff" h="100%" padding="24px">
            <HStack alignItems="center">
                <Button rounded="50" padding="0" onPress={() => navigation.goBack()} variant="ghost">
                    <ChevronLeftIcon ></ChevronLeftIcon>
                </Button>
                <Text fontSize={'20px'} marginLeft="24px">Transaction Details</Text>
            </HStack>
            <VStack mt="24px" alignItems={'center'}>
                <Text fontSize={'36px'}>₹{transaction.amount.$numberDecimal}</Text>
                <Badge  mt="24px" colorScheme={transaction.type?"success":"error"} >{transaction.type?"Credited":'Debited'}</Badge>
                <Divider width={'50%'} mt="24px"></Divider>
                <Text mt="24px">{moment(transaction.createdAt).format('DD MMM YYYY HH:mm A')}</Text>
            </VStack>
            <Box mt="24px" padding={'16px'} rounded="5" style={{borderColor:'#DBDBDB',borderWidth:'1px'}}>
                <Text fontWeight={'medium'}>Description</Text>
                <Text color={'#404040'}>{transaction.memo}</Text>
            </Box>
            <HStack left="0" right="0" padding="24px" position={'absolute'} bottom="0">
                <Button variant={'outline'} borderColor="#DC2626" colorScheme="error" flexGrow={'1'} marginRight="8px">Delete</Button>
                <Button variant={'outline'} borderColor="#000"  colorScheme="black" flexGrow={'1'} marginLeft="8px">Edit</Button>
            </HStack>
        </Box>
    )
}