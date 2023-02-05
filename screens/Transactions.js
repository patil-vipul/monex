import { AddIcon, Text, Fab, Box, Skeleton, HStack, Pressable, Button, ChevronLeftIcon } from "native-base";
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import TransactionListNew from '../components/TransactionListNew';
import { useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { getStore } from "../libraries/store";
import get from "../libraries/get";
export default function Home({ navigation }) {
    const [transactions, setTransactions] = useState(null)
    const [isTransactionLoaded, setIsTransactionLoaded] = useState(false)

    useFocusEffect(() => {

        async function getUserId() {
            let user = await getStore('user');
            return user.userId
        }

        async function loadBalance() {
            var userId = await getUserId();
            var t = await get(`http://localhost:3333/transactions/${userId}/6`)
            t = await t.json()
            if (t.success) {
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
            <HStack alignItems="center">
                <Button rounded="50" padding="0" onPress={() => navigation.goBack()} variant="ghost">
                    <ChevronLeftIcon ></ChevronLeftIcon>
                </Button>
                <Text fontSize={'20px'} marginLeft="24px">Transactions</Text>
            </HStack>
            <Skeleton h="20" rounded="5" isLoaded={isTransactionLoaded}>
                <TransactionListNew style={{marginTop:'24px'}} transactions={transactions}></TransactionListNew>
            </Skeleton>

            <Fab bg="#2563EB" onPress={() => navigation.navigate("AddTransaction")} renderInPortal={false} shadow={2} size="sm" icon={<AddIcon color="white" name="plus" size="sm" />} />

        </Box>
    )
}