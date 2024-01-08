import { LayoutContainer } from '../LayoutContainer'
import { Box, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { Input } from '../common/Input'
import { Button } from '../common/Button'

export const Hero = () => {
    return (
        <LayoutContainer pt={88} pb={84}>
            <HStack width='full' display='flex' justifyContent='space-between' flexWrap={{ base: 'wrap', md: 'unset' }}>
                <Box textAlign='left' gap={7} display='flex' flexDir='column' maxW={518}>
                    <Heading as='h1' fontSize={{base: '5xl', md: '8xl'}} fontWeight='bold' lineHeight='1'>
                        A Telco Company
                    </Heading>
                    <Text color='black.600' fontSize={'lg'}>Stay ahead of the game with reliable business communication</Text>
                    <Box display='flex' gap={5}>
                        <Input placeholder='Enter your email' h='64px' />
                        <Button  h='64px'>Lets Talk</Button>
                    </Box>
                </Box>
                <Image src='/assets/image/hero.png' />
            </HStack>
        </LayoutContainer>
    )
}
