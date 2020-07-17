import * as React from 'react';
import { CssBaseline, MuiThemeProvider, createStyles, makeStyles } from '@material-ui/core';

import HomePage from '../pages/HomePage';
import theme from '../theme';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
    },
  }),
);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <HomePage />
      </MuiThemeProvider>
    </div>
  );
};

export default App;
