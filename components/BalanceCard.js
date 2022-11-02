import { Text, Box, Skeleton } from "native-base";
import useBalance from "../hooks/useBalance";
export default function BalanceCard() {

    const { balance, isLoaded } = useBalance()

    return (
        <Box padding="16px" rounded="5px" bg="#f5f5f5">
            <Text fontSize="lg">Balance</Text>
            <Skeleton h="10" isLoaded={isLoaded}>
                <Text fontSize="4xl">₹ {balance}</Text>
            </Skeleton>

        </Box>
    )
}