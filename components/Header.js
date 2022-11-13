import { Text, Box, Heading, HStack, Pressable, Center } from "native-base";
export default function Header() {

    // js logic

    return (
        <Box marginBottom="16px">
            <HStack space={3} justifyContent="space-between">
                <Heading>Hi, Bhavesh</Heading>
                <Pressable rounded="50" w="32px" h="32px" bg="coolGray.100">
                    <Center w="32px" h="32px" >
                        <Text>B</Text>
                    </Center>
                </Pressable>
            </HStack>
        </Box>
    )
}