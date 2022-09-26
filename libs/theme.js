import { mode } from "@chakra-ui/theme-tools";
import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "#fefefe")(props),
      bg: mode("#DCDCDC", "#141214")(props),
    },
    '.blog': {
      div: {
        // px: '8',
      },
      h1: {
        fontSize: '4xl',
        fontWeight: 'bold',
        mb: '4',
        borderBottomWidth: '1px',
        py: '4'
      },
      h2: {
        fontSize: '3xl',
        fontWeight: 'bold',
        mb: '2'

      },
      h3: {
        fontSize: '2xl',
        fontWeight: 'bold',
        mb: '4'

      },
      li: {
        ml: '8'
      },
      pre: {
        my: '6',
        backgroundColor: '#161b22',
        p: '4',
        borderRadius: '1rem'
      },
      p: {
        py: '4',
      }
    }
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
