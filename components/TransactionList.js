import { FlatList, Text, Box, HStack, } from "native-base";
import moment from 'moment/moment';

export default function TransactionList({ transactions }) {
    return (
        <FlatList data={transactions} renderItem={({
            item
        }) => <Box marginBottom="8px" padding="16px" bg={item.type ? "#dcfce7" : "#fed7aa"} rounded="5">
                <HStack justifyContent="space-between">
                    <Text color="#404040" fontSize="sm">{item.type ? "Credited" : "Debited"}</Text>
                    <Text color="#404040" fontSize="sm">{moment(item.timestamp).format('HH:mm A [] DD/MM/YY')} </Text>
                </HStack>
                <Text fontSize="xl">₹ {item.amount}</Text>
            </Box>} keyExtractor={item => item.id} />
    )
}