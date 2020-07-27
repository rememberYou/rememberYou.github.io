import * as React from 'react';
import { CssBaseline, createStyles, makeStyles } from '@material-ui/core';
import HomePage from '../pages/HomePage';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: 'grid',
      placeItems: 'center',
      height: '100vh',
      width: '100%',
    },
  }),
);

const App = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;
