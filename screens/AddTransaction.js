import { ChevronLeftIcon, Button, Select, Text, TextArea, CheckIcon, Fab, Input, Box, Skeleton, Heading, Pressable, Center, HStack, AddIcon, Badge, Divider, SmallCloseIcon } from "native-base";
import { useState } from "react";

export default function AddTransaction({ navigation }) {

    const [amount, setAmount] = useState()
    const handleAmountChange = text => setAmount(text);
    const [transactionType, setTransactionType] = useState(null)
    const [memo, setMemo] = useState(null)
    const handleMemoChange = text => setMemo(text);
    const [category, setCategory] = useState(null)
    const additionalTags = ['Subscription', 'Rent', 'Gaming'];
    const [selectedAdditionalTags, setSelectedAdditionalTags] = useState([])
    function handleAdditionalTagsChange(itemValue) {
        let tags = [...selectedAdditionalTags]
        tags.push(itemValue)
        setSelectedAdditionalTags(tags)
    }
    function handleAdditionalTagBadgePress(value) {
        let tags = [...selectedAdditionalTags]
        tags.splice(tags.indexOf(value), 1);
        setSelectedAdditionalTags(tags)
    }

    return (
        <Box bg="#fff" h="100%">
            <Box margin="32px" paddingBottom="30px">
        
                <HStack space={3} alignItems="center">
                    <Button rounded="50" w="40px" h="40px" onPress={() => navigation.goBack()} size="md" variant="ghost">
                        <ChevronLeftIcon w="40px" h="40px"></ChevronLeftIcon>
                    </Button>
                    <Heading>Add transaction</Heading>
                </HStack>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Amount</Text>
                    <Input keyboardType="numeric" mt='16px' onChangeText={handleAmountChange} size="md" variant='outline' placeholder='Amount'></Input>
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Transaction Type</Text>
                    <Select mt='16px' accessibilityLabel="Transaction Type" placeholder="Transaction Type"
                        onValueChange={itemValue => setTransactionType(itemValue)}>
                        <Select.Item label="Credit" value="1" />
                        <Select.Item label="Debit" value="0" />
                    </Select>
                </Box>

                <Box mt='24px'>
                    <Text bold fontSize="lg">Memo</Text>
                    <TextArea onChangeText={handleMemoChange} mt='16px' h={20} placeholder="e.g. Milk" />
                </Box>

                <Box mt='24px' mb="24px">
                    <Text bold fontSize="lg">Category</Text>
                    <Select mt='16px' accessibilityLabel="Category" placeholder="Category"
                        onValueChange={itemValue => setCategory(itemValue)}  >
                        <Select.Item label="Food" value="0" />
                        <Select.Item label="Investment" value="1" />
                        <Select.Item label="Travelling" value="2" />
                        <Select.Item label="Entertainment" value="3" />
                    </Select>
                </Box>

                <Divider></Divider>
                <Box mt='24px'>
                    <Text bold fontSize="lg">Additional Tags</Text>
                    <HStack mt="10px">
                        {
                            selectedAdditionalTags.map(key =>
                                <Pressable key={key} onPress={() => handleAdditionalTagBadgePress(key)}>
                                    <Badge rounded="50" mr="2" alignSelf="center" variant="solid">
                                        <HStack alignItems="center">
                                            <Text color="white">{key} </Text> <SmallCloseIcon color="white" />
                                        </HStack>
                                    </Badge>
                                </Pressable>
                            )
                        }
                    </HStack>
                    <Select mt='16px' accessibilityLabel="Transaction Type" placeholder="Additional Tags"
                        onValueChange={handleAdditionalTagsChange} >
                        {additionalTags && additionalTags.filter(x => !selectedAdditionalTags.includes(x)).map(key =>
                            <Select.Item label={key} value={key} key={key} />
                        )}

                    </Select>
                </Box>

                <Button mt='24px' endIcon={<AddIcon />}> Add Transaction  </Button>
            </Box>
        </Box >
    )
}