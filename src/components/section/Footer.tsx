import { Flex, Text, VStack } from '@chakra-ui/react'
import { LayoutContainer } from '../LayoutContainer'

export const Footer = () => {
    return (
        <VStack w='full' bg='black'>
            <LayoutContainer p={5} color='white'>
                <Flex w='full' justifyContent='space-between' px={5} flexWrap={{base: 'wrap', md: 'unset'}}>
                    <Text>© 2022 PT. Globalindo Lintas Selaras - All Rights Reserved</Text>
                    <Flex columnGap={{md: 10}} justifyContent={{base: 'space-between', md: 'unset'}} w={{base: 'full', md: 'unset'}}>
                        <Text>Terms of use</Text>
                        <Text>Privacy policy</Text>
                    </Flex>
                </Flex>

            </LayoutContainer>
        </VStack>
    )
}
