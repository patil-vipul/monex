import { useFocusEffect } from "@react-navigation/native";
import { Text, Box, Skeleton } from "native-base";
import { useCallback, useState } from "react";
import get from "../libraries/get";
import { getStore } from "../libraries/store";
export default function BalanceCard({style}) {

    const [balance, setBalance] = useState(null);
    const [isBalanceLoaded, setIsBalanceLoaded] = useState(false)

    useFocusEffect(
        useCallback(()=>{
            async function getUserId(){
                let user = await getStore('user');
                return user.userId  
            }
            async function loadBalance(){
                var userId = await getUserId();
                var balance = await get('http://localhost:3333/balance/'+userId)
                balance = await balance.json()
                if(balance.success){
                    setBalance(balance.result.balance.$numberDecimal)
                    setIsBalanceLoaded(true)
                }
            }
            loadBalance()
        },[])
        )

    return (
        <Box padding="16px" rounded="5px" style={[
            {   
                borderColor:'#e5e5e5',
                borderWidth: 1,
                borderStyle: 'solid',
                shadowColor: "#000",
                shadowOffset: {
                    width: 0,
                    height: 3,
                },
                shadowOpacity: 0.10,
                shadowRadius: 8,
                elevation: 1,
            },style]}>
            <Text fontSize="16px">Balance</Text>
            <Skeleton h="10" isLoaded={isBalanceLoaded}>
                <Text fontSize="36px" fontWeight="medium">₹ {balance}</Text>
            </Skeleton>
        </Box>
    )
}