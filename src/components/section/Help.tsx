import { LayoutContainer } from '../LayoutContainer'
import { Accordion, AccordionButton, AccordionItem, AccordionPanel, Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";
import { AddIcon } from '../../assets/svg/AddIcon';
import { accordionData } from '../../module/data';
import { Input } from '../common/Input';
import { Button } from '../common/Button';

export const Help = () => {
    return (
        <LayoutContainer py={20} gap={20}>
            <SimpleGrid columns={2} width='full' display={{ base: 'flex', md: 'grid' }} justifyContent='space-between' flexWrap={{ base: 'wrap', md: 'unset' }} rowGap={10} columnGap={4}>
                <Box>
                    <Accordion>
                        {accordionData.map((item, index) => (
                            <AccordionItem>
                                <h2>
                                    <AccordionButton py={5}>
                                        <Box as="span" flex='1' textAlign='left'>
                                            {item.title}
                                        </Box>
                                        <AddIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    {item.description}
                                </AccordionPanel>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Box>
                <Box gap={7} display='flex' flexDir='column' textAlign={'left'}>
                    <Heading as='h1' fontSize={{ base: '4xl', md: '5xl' }} fontWeight='bold' lineHeight='1'>
                        How we can help you?
                    </Heading>
                    <Text color='black.600' fontSize={'md'}>Follow our newsletter. We will regulary update our latest project and availability.</Text>
                    <Box display='flex' gap={5}>
                        <Input placeholder='Enter your email' h='64px' borderColor='transparent' />
                        <Button h='64px'>Lets Talk</Button>
                    </Box>
                    <Text color='blue.900' fontSize={'md'} display='flex' alignItems='center' gap={2}><u>More FAQ</u> <FaArrowRight /></Text>
                </Box>
            </SimpleGrid>
        </LayoutContainer>
    )
}
