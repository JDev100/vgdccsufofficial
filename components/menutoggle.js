import React from "react"
import { Box } from "@chakra-ui/react"


const MenuToggle = ({ toggle, isOpen }) => {
  return (
    <Box display={{ base: "block", md: "none" }} onClick={toggle}>
      {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
    </Box>
  )
}

export default MenuToggle