import { AddIcon, Text, Fab, Box, Skeleton } from "native-base";
import Header from '../components/Header';
import BalanceCard from '../components/BalanceCard';
import TransactionList from '../components/TransactionList';
import useTransactions from '../hooks/useTransactions';
export default function Home({ navigation }) {

    const { transactions, isLoaded: isTransactionLoaded } = useTransactions()

    return (
        <Box bg="#fff" h="100%">
            <Box margin="32px">

                <Header></Header>

                <BalanceCard></BalanceCard>

                <Text fontSize="lg" my="16px">Transactions</Text>

                <Skeleton h="20" rounded="5" isLoaded={isTransactionLoaded}>
                    <TransactionList transactions={transactions}></TransactionList>
                </Skeleton>

            </Box>

            <Fab onPress={() => navigation.navigate("AddTransaction")} renderInPortal={false} shadow={2} size="sm" icon={<AddIcon color="white" name="plus" size="sm" />} />

        </Box>
    )
}