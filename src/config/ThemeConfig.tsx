//Esta es una funcion de tipo componente

import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

enum themePalette {
  bg = "#12181b",
  main = "#C8FA5F",
  font_global = "Roboto Slab",
  color = "#fff",
  error_main = "#f44336",
  bg_error_main = "rgba(244,67,54,0.1)",
  success_main = "#66bb6a",
  bg_success_main = "rgba(102,187,106,0.1)",
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
    fontSize: 18,
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
    MuiAlert: {
      /*estilos por defecto*/
      defaultProps: {
        style: {
          borderRadius: "0.8rem",
          fontSize: "1rem",
        },
      },
      /* estilos parciales, el componente alert tiene distintintos tipos de alert (error,info, succes) */
      styleOverrides: {
        standardError: {
          border: `1px solid ${themePalette.error_main}`,
          background: themePalette.bg_error_main,
        },
        standardSuccess: {
          border: `1px solid ${themePalette.success_main}`,
          background: themePalette.bg_success_main,
        },
      },
    },
  },
});

// type ThemeProp = {
//   children: JSX.Element;
// };

/*es una constante y estamos definiendo que es una compoente de react y themeProp estamos definiendo el tipo 
datos que tiene las props*/
// export const ThemeConfig: FC<ThemeProp> = ({ children }) => {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       {children}
//     </ThemeProvider>
//   );
// };

/* lo mismo de arraba pero definiendo las propiedades */
interface Conf {
  children: JSX.Element;
}

export function ThemeConfig({ children }: Conf) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
