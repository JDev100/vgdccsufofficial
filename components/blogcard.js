import React from "react";
import NextLink from "next/link";
import {
  Box,
  Stack,
  Text,
  Button,
  Badge,
  Wrap,
  WrapItem,
  Image,
  Flex,
} from "@chakra-ui/react";
const BlogCard = ({ image, badges, date, title, desc, href }) => {
  return (
    <Flex justify="center" direction="column" align="center">
      <Box w="275px" mx={4} p={4} border="1px" borderRadius="1rem">
        {/* <Box w="225px" h="127px" >
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      
      </Box> */}
        <Box w="100%" mb={{ base: 12, md: 0 }} mx="auto">
          <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
        </Box>
        <Box>
          <Wrap alignItems="center" mt={4}>
            {badges.map((badge) => (
              <WrapItem key={badge}>
                <Badge variant="solid" colorScheme="blue" rounded="full" px={2}>
                  {badge}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
          <Stack align="left">
            <Text as="h5" fontWeight="bold" mb={0} mt={2} fontSize='xs'>
              Posted on {date}
            </Text>
            <Text as="h2" fontWeight="normal" mb={0} mt={2}>
              {title}
            </Text>
            <Text fontWeight="light" mb="0" textAlign={"left"}>
              {desc}
            </Text>
            <NextLink href={href} passHref>
              <a target="_blank">
                <Button variant="solid" size="sm" colorScheme="blue">
                  Read More
                </Button>
              </a>
            </NextLink>
          </Stack>
        </Box>
      </Box>
    </Flex>
  );
};

export default BlogCard;
