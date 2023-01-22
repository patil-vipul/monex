import { FlatList, Text, Box, HStack, } from "native-base";
import moment from 'moment/moment';

export default function TransactionList({ transactions }) {

    console.log(transactions[0].amount,'int list')
    return (
        <FlatList data={transactions} renderItem={({
            item
        }) => <Box marginBottom="8px" padding="16px" bg={item.type ? "#dcfce7" : "#fed7aa"} rounded="5">
                <HStack justifyContent="space-between">
                    <Text color="#404040" fontSize="sm">{item.type ? "Credited" : "Debited"}</Text>
                    <Text color="#404040" fontSize="sm">{moment(item.createdAt).format('HH:mm A [] DD/MM/YY')} </Text>
                </HStack>
                <Text fontSize="xl">₹ {item.amount.$numberDecimal}</Text>
            </Box>} keyExtractor={item => item._id} />
    )
}