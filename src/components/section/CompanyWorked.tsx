import { Heading, Image, SimpleGrid, VStack } from '@chakra-ui/react'
import { LayoutContainer } from '../LayoutContainer'
import { companyData } from '../../module/data'

export const CompanyWorked = () => {
    return (
        <VStack w='full' bg='black.980'>
            <LayoutContainer py={20} gap={20}>
                <Heading as='h1' fontWeight='bold' lineHeight='1'>
                    Companies We Work With
                </Heading>
                <SimpleGrid columns={{base: 2, md: 5}} w='full' justifyContent='center' alignItems='center' justifyItems='center' rowGap={20}>
                    {companyData.map((company) => (
                        <Image key={company.id} src={company.pictUrl} alt='company' />
                    ))}
                </SimpleGrid>

            </LayoutContainer>
        </VStack>
    )
}
