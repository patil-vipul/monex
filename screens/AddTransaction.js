import { ChevronLeftIcon, Button, Select, Text,TextArea ,CheckIcon, Fab, Input, Box, Skeleton, Heading, Pressable, Center, HStack } from "native-base";

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

                <Box mt='24px'>
                    <Text bold fontSize="lg">Amount</Text>
                    <Input mt='16px' size="md" variant='outline' placeholder='Amount'></Input>
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Transaction Type</Text>
                    <Select  mt='16px' accessibilityLabel="Transaction Type" placeholder="Transaction Type" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}  >
                        <Select.Item label="Credit" value="1" />
                        <Select.Item label="Debit" value="0" />
                    </Select>
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Memo</Text>
                    <TextArea mt='16px' h={20} placeholder="e.g. Milk"  />
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Category</Text>
                    <Select  mt='16px' accessibilityLabel="Category" placeholder="Category" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}  >
                        <Select.Item label="Food" value="0" />
                        <Select.Item label="Investment" value="1" />
                        <Select.Item label="Travelling" value="2" />
                        <Select.Item label="Entertainment" value="3" />
                    </Select>
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Transaction Type</Text>
                    <Select  mt='16px' accessibilityLabel="Transaction Type" placeholder="Transaction Type" _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="5" />
                    }}  >
                        <Select.Item label="Credit" value="1" />
                        <Select.Item label="Debit" value="0" />
                    </Select>
                </Box>

            </Box>



        </Box>
    )
}