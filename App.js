import { StyleSheet } from 'react-native';
import { NativeBaseProvider, AddIcon, Text, Fab, Box, Skeleton } from "native-base";
import { useEffect, useState } from 'react';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import TransactionList from './components/TransactionList';
import useTransactions from './hooks/useTransactions';

export default function App() {

  const { transactions, isLoaded: isTransactionLoaded } = useTransactions()

  return (
    <NativeBaseProvider>
      <Box margin="32px">

        <Header></Header>

        <BalanceCard></BalanceCard>

        <Text fontSize="lg" my="16px">Transactions</Text>

        <Skeleton h="20" rounded="5" isLoaded={isTransactionLoaded}>
          <TransactionList transactions={transactions}></TransactionList>
        </Skeleton>

      </Box>

      <Fab renderInPortal={false} shadow={2} size="sm" icon={<AddIcon color="white" name="plus" size="sm" />} />

    </NativeBaseProvider >
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 16
  }
});
