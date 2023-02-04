import { AddIcon, Text, Fab, Box, Skeleton,HStack,Pressable } from "native-base";
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getStore } from "../libraries/store";
import get from "../libraries/get";
export default function Home({ navigation }) {
    const [transactions, setTransactions] = useState(null)
    const [isTransactionLoaded, setIsTransactionLoaded] = useState(false)
   
    useFocusEffect(()=>{

        async function getUserId(){
            let user = await getStore('user');
            return user.userId  
        }
        
        async function loadBalance(){
            var userId = await getUserId();
            var t = await get(`http://localhost:3333/transactions/${userId}/6`)
            t = await t.json()
            if(t.success){
                setTransactions(t.result)
                setIsTransactionLoaded(true)
               // setTransactions(balance.result.balance.$numberDecimal)
               // setIsBalanceLoaded(true)
            }
           
        }
        loadBalance()
    })

    return (
        <Box bg="#fff" h="100%" padding="24px">
            <Box>
                <Header></Header>
                <BalanceCard style={{ marginTop: '16px' }}></BalanceCard>
                <HStack space={3} justifyContent="space-between">
                    <Text fontSize="16px" mt="24px" mb="16px">Transactions</Text>

                    <Pressable>
                        <Text fontSize="16px" mt="24px" color="#2563EB" mb="16px">View All</Text>
                    </Pressable>
                </HStack>


                <Skeleton h="20" rounded="5" isLoaded={isTransactionLoaded}>
                    <TransactionList transactions={transactions}></TransactionList>
                </Skeleton>

            </Box>

            <Fab onPress={() => navigation.navigate("AddTransaction")} renderInPortal={false} shadow={2} size="sm" icon={<AddIcon color="white" name="plus" size="sm" />} />

        </Box>
    )
}