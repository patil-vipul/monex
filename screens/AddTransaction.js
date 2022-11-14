import { ChevronLeftIcon, Button, Text, Fab, Box, Skeleton, Heading, Pressable, Center, HStack } from "native-base";

export default function AddTransaction({ navigation }) {

    return (
        <Box bg="#fff" h="100%">
            <Box margin="32px">
                <HStack space={3} alignItems="center">
                    <Button rounded="50" w="40px" h="40px" onPress={() => navigation.goBack()} size="md" variant="ghost">
                        <ChevronLeftIcon w="40px" h="40px"></ChevronLeftIcon>
                    </Button>

                    <Heading>Add transaction</Heading>
                </HStack>

            </Box>



        </Box>
    )
}