//Esta es una funcion de tipo componente
import React, { Children } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { yellow } from "@mui/material/colors";

type ThemeProp = {
  children: JSX.Element;
};

enum themePalette {
  bg = "#12181b",
  main = "#C8FA5F",
  font_global = "Roboto Slab",
  color = "#fff",
}
const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: themePalette.bg,
    },
    primary: {
      main: themePalette.main,
    },
  },
  typography: {
    fontFamily: themePalette.font_global,
    fontSize: 20,
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: "none",
          boxShadow: "none",
          borderRadius: "1rem",
        },
      },
    },
  },
});

/*es una constante y estamos definiendo que es una compoente de react y themeProp estamos definiendo el tipo 
datos que tiene las props*/
export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

/* lo mismo de arraba pero definiendo las propiedades */

export function ThemeConfig1({
  children,
}: {
  children: JSX.Element;
}): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
