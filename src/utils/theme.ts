import { extendTheme } from "@chakra-ui/react";

const colors = {
  blue: {
    900: "#3461FF",
  },
  black: {
    200: "#333333",
    600: "#999999",
    980: "#fafafa",
  },
};

const customTheme = extendTheme({ colors });

export { customTheme };
