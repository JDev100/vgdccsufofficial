import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Link,
  Image,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";

import { HiOutlineDesktopComputer, HiOutlinePuzzle } from "react-icons/hi";
import { GiPencilBrush } from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";

const SkillsRow = () => {
  return (
    <Flex
      align="center"
      justify="center"
      direction="column"
      wrap="no-wrap"
      gap={4}
      px={8}
      mb={8}
      // {...props}
    >
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign="center"
      >
        Master Your Skill Tree
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
        Each team was designed to allow students to explore the various fields
        within tech, and discover what aligns with their interests. Our teams
        offer interactive workshops that enhance technical knowledge, as well as
        fun projects to strengthen their abilities.
      </Heading>
      <Flex
        align="center"
        justify={{ base: "center", md: "space-around", xl: "space-between" }}
        direction={{ base: "column-reverse", md: "row" }}
        wrap="no-wrap"
        minH="40vh"
        width='100%'
        gap={16}
        px={8}
        mb={8}
      >
        <Box height='100%' width={['60%', '60%', '20%', '25%']} justifyContent='center'>
            <HiOutlineDesktopComputer
            color="#1e6cff"
                size='100%'
            />
            <Heading textAlign='center' as='h2' size='lg' mt={4}>Code</Heading>
        </Box>
        <Box height='100%'  width={['60%', '60%', '20%', '25%']} justifyContent='center'>
            <GiPencilBrush
                size='100%'
                color="#9d35e7"
            />
            <Heading textAlign='center' as='h2' size='lg' mt={4}>Art</Heading>

        </Box>
        <Box height='100%'  width={['60%', '60%', '20%', '25%']}justifyContent='center'>
            <HiOutlinePuzzle
                size='100%'
                color="#ff4365"
            />
            <Heading textAlign='center' as='h2' size='lg' mt={4}>Design</Heading>

        </Box>
        <Box height='100%'  width={['60%', '60%', '20%', '25%']}justifyContent='center'>
            <BsSoundwave
                size='100%'
                color="#21d19f"
            />
            <Heading textAlign='center' as='h2' size='lg' mt={4}>Sound</Heading>
        </Box>
      </Flex>
    </Flex>
  );
};

export default SkillsRow;
