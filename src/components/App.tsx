import * as React from 'react';
import { CssBaseline, createStyles, makeStyles } from '@material-ui/core';

import HomePage from '../pages/HomePage';

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
      <CssBaseline />
      <HomePage />
    </div>
  );
};

export default App;
