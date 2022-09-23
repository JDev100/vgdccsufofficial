import { Button, Flex, Heading, Stack, Box,  Link, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import {AiOutlineRight} from  'react-icons/ai'

const HeroAlt = ({ title, subtitle, image, ...props }) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column", md: "row" }}
      wrap="no-wrap"
      minH="30vh"
      px={8}
      mb={16}
      {...props}
    >
      {/* IMAGE */}
      <Box w={{ base: "80%", sm: "60%", md: "35%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>

      {/* TITLE SUBTITLE, AND LINK */}
      <Stack
        spacing={4}
        w={{ base: "80%", md: "60%" }}
        align={["center", "center", "flex-end", "flex-end"]}
      >
        <Heading
          as="h2"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "right", "right"]}
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
          textAlign={["center", "center", "right", "right"]}
        >
          {subtitle}
        </Heading>
      </Stack>

      
    </Flex>
  );
};

// Default props for this component
// HeroAlt.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
//   ctaText: PropTypes.string,
//   ctaLink: PropTypes.string,
// };

// HeroAlt.defaultProps = {
//   title: "React landing page with Chakra UI",
//   subtitle:
//     "This is the subheader section where you describe the basic benefits of your product",
//   image: "https://source.unsplash.com/collection/404339/800x600",
//   ctaText: "Create your account now",
//   ctaLink: "/signup",
// };

export default HeroAlt;
