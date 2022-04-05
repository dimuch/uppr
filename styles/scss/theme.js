import { createTheme, responsiveFontSizes } from "@mui/material/styles";
// import sassVariables from './_variables.scss';

// const breakpoints = {
//     xs: sassVariables.screen_xs,
//     sm: sassVariables.screen_sm,
//     md: sassVariables.screen_md,
//     lg: sassVariables.screen_lg,
// };

export const baseTheme = {
  // palette: {
  //     primary: {
  //         main: sassVariables.c_primary,
  //         contrastText: sassVariables.c_positive,
  //     },
  //     secondary: {
  //         main: sassVariables.c_secondary,
  //         contrastText: sassVariables.c_positive,
  //     },
  //     green: {
  //         main: sassVariables.c_green,
  //         contrastText: sassVariables.c_positive,
  //     },
  //     darkgray: {
  //         main: sassVariables.c_gray_dark_variant,
  //     },
  //     midnightBlue: {
  //         main: sassVariables.c_midnight_blue,
  //     },
  //     darkBlueGray: {
  //         main: sassVariables.c_dark_blue_gray,
  //     },
  //     background: {
  //         main: sassVariables.c_positive,
  //         contrastText: sassVariables.c_gray_darker,
  //     },
  //     foreground: {
  //         main: sassVariables.c_positive,
  //     },
  //     backgroundInput: {
  //         main: sassVariables.c_input_background,
  //         contrastText: sassVariables.c_input_text,
  //         contrastDim: sassVariables.c_input_placeholder,
  //     },
  //     success: {
  //         main: sassVariables.c_green,
  //     },
  //     error: {
  //         main: sassVariables.c_error,
  //         contrastText: sassVariables.c_positive,
  //     },
  //     warn: {
  //         main: sassVariables.c_warn,
  //         contrastText: sassVariables.c_gray_darker,
  //     },
  //     buttonSecondary: {
  //         main: sassVariables.c_green,
  //         contrastText: sassVariables.c_positive,
  //     },
  //     action: {
  //         disabled: sassVariables.c_input_placeholder,
  //         disabledBackground: sassVariables.c_input_background,
  //         hover: sassVariables.c_option_hover,
  //         selected: sassVariables.c_option_hover,
  //     },
  //     common: {
  //         grey: sassVariables.c_tertiary,
  //     },
  // },
  typography: {
    // htmlFontSize: 18,
    // fontSize: 18,
    body1: {
      listStyle: "none",
    },
    // fontFamily: sassVariables.font_family_open_sans,
    // h1: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '10.1rem',
    // },
    // h2: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '6.3rem',
    // },
    // h3: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '5rem',
    // },
    // h4: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '3.6rem',
    // },
    // h5: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '2.5rem',
    // },
    // h6: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '2.1rem',
    //     fontWeight: 'bold',
    // },
    // subtitle1: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '1.7rem',
    // },
    // subtitle2: {
    //     fontFamily: sassVariables.font_family_lato,
    //     fontSize: '1.5rem',
    //     fontWeight: 'bold',
    //     textTransform: 'uppercase',
    // },
  },
  // fonts: {
  //     body: sassVariables.font_family_open_sans,
  //     heading: sassVariables.font_family_lato,
  // },
};

export default createTheme(baseTheme);
