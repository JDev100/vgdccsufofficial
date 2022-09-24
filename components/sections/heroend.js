import React from "react";
import NextLink from "next/link"
import {
  Flex,
  Heading,
  Stack,
  Link,
  Image,
  Text,
  Icon,
  Box,
  Button,
} from "@chakra-ui/react";

const HeroEnd = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      wrap="no-wrap"
      gap={4}
      px={8}
      mb={32}
      // {...props}
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign="center"
      >
        Press Start To Play
      </Heading>
      <Heading
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign="center"
      >
        If you want to improve your coding skills, find out how to break into
        the game industry, connect with other people, pick up a new hobby, or
        just want to be involved in the game development space, then this is the place to
        be.
      </Heading>
      <NextLink  href='/' target='_blank'>
        <Button
        size='lg'
        fontSize='25px'
        mt={8}
        >
          Start Game!
        </Button>
      </NextLink>
    </Flex>
  );
};

export default HeroEnd;
