import { LayoutContainer } from '../LayoutContainer'
import { Box, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'

const ServiceItem = ({ title, desc, pictUrl }: { title: string, desc: string, pictUrl: string }) => {
    return <Flex>
        <Image src={pictUrl} w='fit-content' h='fit-content' />
        <Box ml={5} display='flex' flexDir='column' justifyContent='space-between'>
            <Heading as='h1' fontSize={{ base: '2xl', md: '4xl' }} fontWeight='bold' lineHeight='1'>
                {title}
            </Heading>
            <Text color='black.600' fontSize={{ base: 'sm', md: 'md' }}>{desc}</Text>
        </Box>
    </Flex>
}

export const OurServices = () => {
    return (
        <LayoutContainer py={20} gap={20}>
            <SimpleGrid textAlign='left' columns={2} width='full' display={{ base: 'flex', md: 'grid' }} justifyContent='space-between' flexWrap={{ base: 'wrap', md: 'unset' }} rowGap={10}>
                <Flex w='full' flexDir='column' alignItems='flex-start' gap={7}>
                    <Heading as='h1' fontSize='6xl' fontWeight='bold' lineHeight='1'>
                        Our Service
                    </Heading>
                    <Text color='black.600' fontSize={'md'}>We believe that the best way to create a right solutions is to work closely with our clients to understand their goals and challenges.</Text>
                    <Image src='/assets/image/our-services.png' pt={7} />
                </Flex>
                <Box gap={7} display='flex' flexDir='column' textAlign={'left'}>
                    <ServiceItem title='Installation' desc='Network and/or electrical construction and installation with certified network engineers' pictUrl='/assets/image/service-1.png' />
                    <ServiceItem title='Maintenance' desc='Ensure smooth communication with our comprehensive maintenance services for vital IT and electrical systems' pictUrl='/assets/image/service-2.png' />
                    <ServiceItem title='Hardware Provider' desc='Procurement of high quality equipment with various brands needed in the implementation of telecommunications' pictUrl='/assets/image/service-3.png' />
                    <ServiceItem title='Consultation' desc='Navigate the evolving landscape of your cost-effective infrastructure with expert guidance' pictUrl='/assets/image/service-4.png' />
                </Box>
            </SimpleGrid>
        </LayoutContainer>
    )
}
