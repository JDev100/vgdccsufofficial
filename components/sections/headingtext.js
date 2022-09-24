import React from "react";
import { Heading } from "@chakra-ui/react";
const HeadingText = ({ title, text }) => {
  return (
    <>
      <Heading
        as="h1"
        size="xl"
        fontWeight="bold"
        color="primary.800"
        textAlign="center"
      >
        {title}
      </Heading>
      <Heading
        mt={8}
        as="h2"
        size="md"
        color="primary.800"
        opacity="0.8"
        fontWeight="normal"
        lineHeight={1.5}
        textAlign="center"
        mb={32}
      >
        {text}
      </Heading>
    </>
  );
};

export default HeadingText;
