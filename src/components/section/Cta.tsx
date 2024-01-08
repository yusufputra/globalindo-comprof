import React from 'react'
import { LayoutContainer } from '../LayoutContainer'
import { Box, Flex, GridItem, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import { Button } from '../common/Button'

export const Cta = () => {
    return (
        <LayoutContainer py={20} gap={20}>
            <Box w='full' bgImage={`url("/assets/image/cta-background.svg")`} bgRepeat='no-repeat' bgSize='contain' bgPos='center' h={455} display='flex' p={8}>
                <SimpleGrid columns={3} textAlign='left' gap={7} color='white' justifyContent='space-between' alignItems='center' justifyItems='center'>
                    <GridItem colSpan={2}>
                        <Flex flexDir='column' gap={5}>
                            <Heading as='h1' fontSize={{ base: 'sm', md: '6xl' }} fontWeight='bold' lineHeight='1'>
                                Elevate Your Connectivity Now!
                            </Heading>
                            <Button w='fit-content'>Start Now</Button>
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Image src='/assets/image/cta-icon.svg' />
                    </GridItem>
                </SimpleGrid>
            </Box>
        </LayoutContainer>
    )
}
