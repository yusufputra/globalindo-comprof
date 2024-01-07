import { StackProps, VStack } from '@chakra-ui/react'
import { ReactNode } from 'react'

export const LayoutContainer = ({ children, ...props }: { children: ReactNode } & StackProps) => {
  return (
    <VStack {...props} w='full' maxWidth='1201px' px={{base: 4, md: 0}}>{children}</VStack>
  )
}
