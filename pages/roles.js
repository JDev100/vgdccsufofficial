import React from "react";
import HeadingText from "../components/sections/headingtext";
import IconText from "../components/sections/icontext";

import { HiOutlineDesktopComputer, HiOutlinePuzzle } from "react-icons/hi";
import { BsSoundwave } from "react-icons/bs";
import { GiPencilBrush } from "react-icons/gi";

const Roles = () => {
  return (
    <>
      <HeadingText
        title="Choose Your Class"
        text="Video game development involves collaboration between people of various skillsets.
    We will assign you to a game dev team with an optimized number of people of each class given
    the scope of the game you will work on"
      />

      {/* ROLES */}
      <IconText
        title="Code"
        text="Developers of the Code class will be responsible for the implementation of the game.
        This means they will work with other roles to make a plan on how to 
        implement all the graphics, design, and sound into an engine like Unity or Unreal"
        icon={<HiOutlineDesktopComputer color="#1e6cff" size="100%" />}
      />
      <IconText
        title="Art"
        text="Developers of the Art class will be responsible for the aesthetic of the game.
        They will create amazing graphics and animations and work with the Code role 
        to impement them in the game"
        icon={<GiPencilBrush size="100%" color="#9d35e7" />}
        iconAlignRight
      />
      <IconText
        title="Design"
        text="Developers of the Design class will be responsible for design the core gameplay loop.
        This means they will work with other roles to make a plan on how to 
        make an engaging gameplay loop and balance the game difficulty"
        icon={<HiOutlinePuzzle size="100%" color="#ff4365" />}
      />
      <IconText
        title="Sound"
        text="Developers of the Sound class will be responsible for the sound of the game.
        They will create amazing sound effects and music and work with the Code role 
        to impement them in the game. They are important in getting players immersed in the game."
        icon={<BsSoundwave size="100%" color="#21d19f" />}
        iconAlignRight
      />
    </>
  );
};

export default Roles;
