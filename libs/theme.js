import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "#fefefe")(props),
      bg: mode("#DCDCDC", "#141214")(props),
    },
  }),
};

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  // components,
  styles,
});

export default theme;
