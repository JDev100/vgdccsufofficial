import { Box, Flex, Link, IconButton } from '@chakra-ui/react'
import NextLink from "next/link"
import {AiFillGithub}  from 'react-icons/ai'
const Footer = () => {
  return (
    <Box align="center"  fontSize="sm" mt={5} px={8}>
      <Flex justify='space-between'>
      &copy; {new Date().getFullYear()} Jesus Cazares. All Rights Reserved.
      <NextLink  href='https://github.com/JDev100/vgdccsufofficial/' target='_blank'>
        <IconButton
        size='lg'
        fontSize='25px'
        icon={<AiFillGithub/>}
        />
      </NextLink>
      </Flex>
    </Box>
  )
}

export default Footer