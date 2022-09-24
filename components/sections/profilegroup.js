import React from "react";
import { SimpleGrid, Box, Image, Heading, Flex } from "@chakra-ui/react";
import Profile from "../profile";
const ProfileGroup = () => {
  return (
    <>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing={10} mb={16}>
        
        <Profile img='/images/profile-1.jpg' name='Maria Garcia' title='Club President'/>
        <Profile img='/images/profile-2.jpg' name='John Doe' title='Treasurer'/>
        <Profile img='/images/profile-3.jpg' name='Mario Jumpman' title='Event Coordinator'/>
        <Profile img='/images/profile-4.jpg' name='Beeg Yoshi' title='Project Manager'/>
      </SimpleGrid>
    </>
  );
};

export default ProfileGroup;
