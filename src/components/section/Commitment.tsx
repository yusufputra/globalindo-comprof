import { LayoutContainer } from '../LayoutContainer'
import { Box, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { FaArrowRight } from "react-icons/fa";

export const Commitment = () => {
    return (
        <LayoutContainer py={20} gap={20}>
            <SimpleGrid columns={2} width='full' display={{ base: 'flex', md: 'grid' }} justifyContent='space-between' flexWrap={{ base: 'wrap', md: 'unset' }} rowGap={10}>
                <SimpleGrid columns={2} textAlign='left' gap={7}>
                    <Box>
                        <Heading as='h1' fontSize='6xl' fontWeight='bold' lineHeight='1'>
                            245%
                        </Heading>
                        <Text color='black.600' fontSize={'md'}>More revenues for the brand</Text>
                    </Box>
                    <Box>
                        <Heading as='h1' fontSize='6xl' fontWeight='bold' lineHeight='1'>
                            130K+
                        </Heading>
                        <Text color='black.600' fontSize={'md'}>Audiences reached</Text>
                    </Box>
                    <Box>
                        <Heading as='h1' fontSize='6xl' fontWeight='bold' lineHeight='1'>
                            50+
                        </Heading>
                        <Text color='black.600' fontSize={'md'}>brands trust us</Text>
                    </Box>
                    <Box>
                        <Heading as='h1' fontSize='6xl' fontWeight='bold' lineHeight='1'>
                            24+
                        </Heading>
                        <Text color='black.600' fontSize={'md'}>Worldwide awards</Text>
                    </Box>
                </SimpleGrid>
                <Box gap={7} display='flex' flexDir='column' textAlign={'left'}>
                    <Heading as='h1' fontSize={{ base: '4xl', md: '6xl' }} fontWeight='bold' lineHeight='1'>
                        Commitments
                    </Heading>
                    <Text color='black.600' fontSize={'md'}>We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</Text>
                    <Text color='blue.900' fontSize={'md'} display='flex' alignItems='center' gap={2}>Learn More <FaArrowRight /></Text>
                </Box>
            </SimpleGrid>
        </LayoutContainer>
    )
}
