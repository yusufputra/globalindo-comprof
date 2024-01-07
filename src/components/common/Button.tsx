import { ButtonProps, Button as ChakraButton } from '@chakra-ui/react'

export const Button = ({ children, ...props }: ButtonProps) => {
    return (
        <ChakraButton
            size="sm"
            rounded="full"
            padding={[4, 6]}
            color="white"
            bg= "blue.900" {...props}>
            {children}
        </ChakraButton>
    )
}
