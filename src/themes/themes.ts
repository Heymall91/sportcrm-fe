import { createTheme, responsiveFontSizes } from '@mui/material';

export let theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

theme = responsiveFontSizes(theme);
