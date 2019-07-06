export default {
  colors: {
    headerBackground: "#663399",
    headerText: "white",
  },
  fonts: {
    systemSans:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
  shadows: {
    main: "0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
  },
  space: [0, 2, 4, 8, 16, 24, 32, 64],
  fontWeights: {
    thick: 500,
  },
  styles: {
    root: {
      fontFamily: "systemSans",
    },
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
