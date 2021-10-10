import { createTheme } from '@mui/material/styles';

export default createTheme({
  "palette": {
    "primary": {
      "light": "#7986cb",
      "main": "rgba(89, 165, 216, 1)",
      "dark": "#303f9f",
      "contrastText": "#fff"
    },
    "secondary": {
      "main": "rgba(244, 96, 54, 1)",
    },
    "error": {
      "light": "#e57373",
      "main": "#f44336",
      "dark": "#d32f2f",
      "contrastText": "#fff"
    },
    "text": {
      "primary": "rgba(10, 9, 8, 1)",
      "secondary": "rgba(0, 0, 0, 0.54)",
      "disabled": "rgba(0, 0, 0, 0.38)",
      "hint": "rgba(0, 0, 0, 0.38)"
    },
  }
});
