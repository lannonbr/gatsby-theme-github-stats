import colors from "./colors"

export default {
  colors,
  shadows: {
    main: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64],
  fontWeights: {
    thick: 500,
  },
  styles: {
    Header: {
      backgroundColor: "headerBackground",
      color: "headerText",
      boxShadow: "main",
      padding: 3,
      marginBottom: 5,
    },
    h1: {
      margin: 0,
      fontWeight: "thick",
      display: "inline",
    },
  },
}
