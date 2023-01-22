import { ChevronLeftIcon, Button, Select, Text, TextArea, CheckIcon, Fab, Input, Box, Skeleton, Heading, Pressable, Center, HStack, AddIcon, Badge, Divider, SmallCloseIcon } from "native-base";
import { useState } from "react";
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import useAPI from "../hooks/useAPI";

export default function AddTransaction({ navigation }) {
    const transactionSchema = yup.object().shape({
        amount: yup.number().required('Amount is required').positive(),
        transactionType: yup.number().required('Select a transaction type'),
        memo: yup.string(),
        category: yup.number(),
      });
    const additionalTags = ['Subscription', 'Rent', 'Gaming'];
    const [selectedAdditionalTags, setSelectedAdditionalTags] = useState([])
    const { call} = useAPI('http://localhost:3333/transaction')
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

    async function createTransaction(values){
        console.log(values)
        values.type = values.transactionType
        values.user = 'qq9XmMWXPKbEm58IvXFw6KJnkBd2'
        let res = await call(values)
        console.log(res)
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

                <Formik initialValues={{ amount: '',transactionType:'',memo:'', category: '' }} onSubmit={createTransaction} validationSchema={transactionSchema}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <Box>
                            <Box mt='24px'>
                                <Text bold fontSize="lg">Amount</Text>
                                <Input keyboardType="numeric" mt='16px'
                                    onChangeText={handleChange('amount')}
                                    onBlur={handleBlur('amount')}
                                    value={values.amount} 
                                    size="md" variant='outline' placeholder='Amount'></Input>
                                <Box color="red.500" mt='2px'>
                                    <ErrorMessage name="amount"/>
                                </Box>
                                
                            </Box>

                            <Box mt='24px'>
                                <Text bold fontSize="lg">Transaction Type</Text>
                                <Select mt='16px' accessibilityLabel="Transaction Type" placeholder="Transaction Type"
                                    onValueChange={handleChange('transactionType')}
                                    onBlur={handleBlur('transactionType')}
                                    value={values.transactionType}>
                                    <Select.Item label="Credit" value="1" />
                                    <Select.Item label="Debit" value="0" />
                                </Select>
                                <Box color="red.500" mt='2px'>
                                    <ErrorMessage name="transactionType"/>
                                </Box>
                            </Box>

                            <Box mt='24px'>
                                <Text bold fontSize="lg">Memo</Text>
                                <TextArea 
                                onChangeText={handleChange('memo')}
                                onBlur={handleBlur('memo')}
                                value={values.memo}
                                 mt='16px' h={20} placeholder="e.g. Milk" />
                                <Box color="red.500" mt='2px'>
                                    <ErrorMessage name="memo"/>
                                </Box>
                            </Box>

                            <Box mt='24px' mb="24px">
                                <Text bold fontSize="lg">Category</Text>
                                <Select mt='16px' accessibilityLabel="Category" placeholder="Category"
                                    onValueChange={handleChange('category')}
                                    onBlur={handleBlur('category')}
                                    value={values.category} >
                                    <Select.Item label="Food" value="0" />
                                    <Select.Item label="Investment" value="1" />
                                    <Select.Item label="Travelling" value="2" />
                                    <Select.Item label="Entertainment" value="3" />
                                </Select>
                                <Box color="red.500" mt='2px'>
                                    <ErrorMessage name="category"/>
                                </Box>
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

                            <Button mt='24px' onPress={handleSubmit} endIcon={<AddIcon />}> Add Transaction  </Button>
                        </Box>
                    )}
                </Formik>
            </Box>
        </Box >
    )
}