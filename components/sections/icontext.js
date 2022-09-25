import React, {useState} from "react";
import {
  Button,
  Flex,
  Heading,
  Stack,
  Box,
  Link,
  Image,
  Text,
} from "@chakra-ui/react";

const IconText = ({ title, text, icon, iconAlignRight }) => {
//    const [alignRight, setAlignRight] = useState(iconAlign); 
   const alignRight = true
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
    //   direction= {iconAlignRight ? 'row-reverse' : 'row'}
      direction={{ base: "column", md:  iconAlignRight ? 'row-reverse' : 'row'}}
      wrap="no-wrap"
      minH="30vh"
      px={8}
      mb={8}
    >
      {/* IMAGE */}
      {/* <Image src={image} size="100%" rounded="1rem" shadow="2xl" /> */}
      <Box
        height="100%"
        width={["60%", "60%", "20%", "25%"]}
        justifyContent="center"
      >
        {icon}
      </Box>

      {/* TITLE SUBTITLE, AND LINK */}
      <Stack
        spacing={4}
        w={{ base: "80%", md: "60%" }}
        align={[
          "center",
          "center",
           iconAlignRight  ? "flex-start" : "flex-end",
           iconAlignRight  ? "flex-start" : "flex-end",
        ]}
      >
        <Heading
          as="h2"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={[
            "center",
            "center",
             iconAlignRight  ? "left" : "right",
             iconAlignRight  ? "left" : "right",
          ]}
        >
          {title}
        </Heading>
        <Heading
          as="h3"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={[
            "center",
            "center",
             iconAlignRight  ? "left" : "right",
             iconAlignRight  ? "left" : "right",
          ]}
        >
          {text}
        </Heading>
      </Stack>
    </Flex>
  );
};

export default IconText;
