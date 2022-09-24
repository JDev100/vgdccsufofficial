import React from 'react'
import { Box, Image, Heading, Flex } from "@chakra-ui/react";

const Profile = ({img, name, title}) => {
  return (
    <Flex justify="center" direction='column' align='center'>
    <Box w="200px" justifyContent='center'>
      <Image
        src={img}
        size="100%"
        rounded="100%"
        shadow="2xl"
      />
    </Box>
    <Heading textAlign='center'fontSize='30px' mt={8}>{name}</Heading>
    <Heading textAlign='center' mt={2} fontSize='20px'>{title}</Heading>
  </Flex>
  )
}

export default Profile