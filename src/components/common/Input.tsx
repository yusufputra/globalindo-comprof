import { Input as ChakraInput, InputProps } from '@chakra-ui/react'

export const Input = (props: InputProps) => {
  return (
    <ChakraInput {...props} rounded='full' borderColor='black.200' bg='black.980'/>
  )
}
