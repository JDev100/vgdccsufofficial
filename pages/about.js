import React from "react";
import { Box, Image } from "@chakra-ui/react";
import HeadingText from "../components/sections/headingtext";

import profilegroup from "../components/sections/profilegroup";
import ProfileGroup from "../components/sections/profilegroup";

const About = () => {
  return (
    <>
      <Box w="100%" mb={16}>
        <Image
          src="/images/about-header.jpg"
          size="100%"
          rounded="1rem"
          shadow="2xl"
        />
      </Box>
      <HeadingText
        title="About Us"
        text="We are the Video Game Development Club of California State University Fullerton. We are a group of passionate students striving to make a mark in the video game industry."
      />
      <ProfileGroup/>
    </>
  );
};

export default About;
