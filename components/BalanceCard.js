import { Text, Box, Skeleton } from "native-base";
import useBalance from "../hooks/useBalance";
import useSpends from "../hooks/useSpends";
export default function BalanceCard() {

    const { balance, isLoaded: isBalanceLoaded } = useBalance()
   // const {spends, isLoaded: isSpendsLoaded} = useSpends()

    return (
        <Box padding="16px" rounded="5px" bg="#f5f5f5">
            <Text fontSize="lg">Balance</Text>
            <Skeleton h="10" isLoaded={isBalanceLoaded}>
                <Text fontSize="4xl">₹ {balance}</Text>
            </Skeleton>

        </Box>
    )
}