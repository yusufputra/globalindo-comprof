import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#3461FF",
  },
  black: {
    200: "#333333",
    300: "#4d4d4d",
    600: "#999999",
    980: "#fafafa",
  },
  grey: {
    100: "#F8F9FF",
  },
};

const fonts = { heading: `"DM Sans", sans-serif` };

const customTheme = extendTheme({
  colors,
  fonts,
});

export { customTheme };
