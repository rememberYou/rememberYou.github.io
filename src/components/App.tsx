import * as React from 'react';
import {
  CssBaseline,
  ThemeProvider,
  createStyles,
  makeStyles,
  responsiveFontSizes,
} from '@material-ui/core';
import HomePage from '../pages/HomePage';
import theme from '../theme';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      placeItems: 'center',
      width: '100%',
      height: '100vh',
    },
  }),
);

const App = () => {
  const classes = useStyles();
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
