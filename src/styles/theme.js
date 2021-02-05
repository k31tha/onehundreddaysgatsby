// theme.js
// 1. import `extendTheme` function
import { extendTheme } from "@chakra-ui/react"
// 2. Add your color mode config
const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const colors= {
  brand: {
    100: "#f7fafc",
    900: "#1a202c",
  },
}

const styles = {
  //global: {
  //  "a:hover, a:active, a:focus": {
  //    outline: "none"
  //    },
  //}
  global: {
    body: {
      //bg: "green.400",
    },
  },

}

// 3. extend the theme
const theme = extendTheme({ config, colors, styles })
export default theme