import { Button, Flex, Heading, Stack, Box,  Link, Image, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import React from "react";

import {AiOutlineRight} from  'react-icons/ai'

const Hero = ({ title, subtitle, image, ctaLink, ctaText, ...props }) => {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="50vh"
      px={8}
      mb={8}
      {...props}
    >
     

      {/* TITLE SUBTITLE, AND LINK */}
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>

        <Link to={ctaLink}>
          <Button
            variantcolor="primary"
            borderRadius="8px"
            py="4"
            px="4"
            lineHeight="1"
            size="md"
            rightIcon={<AiOutlineRight/>}
          >
            {ctaText}
          </Button>
        </Link>

        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          All beginners welcome
        </Text>
      </Stack>

       {/* IMAGE */}
       <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
};

// Default props for this component
// Hero.propTypes = {
//   title: PropTypes.string,
//   subtitle: PropTypes.string,
//   image: PropTypes.string,
//   ctaText: PropTypes.string,
//   ctaLink: PropTypes.string,
// };

// Hero.defaultProps = {
//   title: "React landing page with Chakra UI",
//   subtitle:
//     "This is the subheader section where you describe the basic benefits of your product",
//   image: "https://source.unsplash.com/collection/404339/800x600",
//   ctaText: "Create your account now",
//   ctaLink: "/signup",
// };

export default Hero;
