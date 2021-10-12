import { createTheme } from '@mui/material/styles';

export default createTheme({
  "palette": {
    "primary": {
      "main": "#F7FFF6"
    },
    "secondary": {
      "main": "rgb(255, 136, 17)",
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
