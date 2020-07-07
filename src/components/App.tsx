import * as React from 'react';
import {
  CssBaseline,
  MuiThemeProvider,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';

import HomePage from '../pages/HomePage';
import theme from '../theme';

const styles = () =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100vh',
    },
  });

interface AppProps extends WithStyles<typeof styles> {
  classes: any;
}

class App extends React.Component<AppProps> {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <HomePage />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default withStyles(styles)(App);
