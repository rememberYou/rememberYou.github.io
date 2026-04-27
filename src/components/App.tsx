import * as React from 'react';
import { CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import HomePage from '../pages/HomePage';
import theme from '../theme';

const useStyles = makeStyles()(() => ({
  root: {
    display: 'grid',
    placeItems: 'center',
    width: '100%',
    height: '100vh',
  },
}));

const App = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <ThemeProvider theme={responsiveFontSizes(theme)}>
        <CssBaseline />
        <HomePage />
      </ThemeProvider>
    </div>
  );
};

export default App;
