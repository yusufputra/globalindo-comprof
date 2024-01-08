import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export const Input = (props: InputProps) => {
  return (
    <ChakraInput borderColor='black.200' rounded='full'  bg='black.980' {...props} />
  )
}
