import { FlatList, Text, Box, HStack, VStack, } from "native-base";
import moment from 'moment/moment';

export default function TransactionListNew({ transactions , style}) {


    return (
        <FlatList style={[style]} data={transactions} renderItem={({
            item
        }) => <Box marginBottom="12px" padding="12px" bg="#FAFAFA"  rounded="5">
                <HStack space={'8px'} alignItems="center">
                    <Box rounded="5" bg="#CECDCD" h="48px" w="48px"></Box>
                    <VStack flexGrow={'1'}>
                    <Text fontSize="16px">Category</Text>
                    <Text color="#404040">{item.memo} </Text>
                    </VStack>
                    <VStack>
                    <Text fontSize="16px" fontWeight={'medium'} color={item.type ? "#16A34A" : "#DC2626"}>₹ {item.amount.$numberDecimal}</Text>
                    <Text color="#404040" >{moment(item.createdAt).format('HH:mm A')} </Text>
                    </VStack>
                    
                    
                </HStack>
               
            </Box>} keyExtractor={item => item._id} />
        
    )
}