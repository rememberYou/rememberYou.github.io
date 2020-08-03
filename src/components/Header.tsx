import * as React from 'react';
import {
  Avatar,
  Fade,
  Paper,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import SocialButtons from './SocialButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      gridArea: 'paper',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: theme.palette.background.default,
    },
    picture: {
      gridArea: 'picture',
      justifySelf: 'center',
      alignSelf: 'end',
      width: '40vh',
      maxWidth: '100%',
      height: 'auto',
      [theme.breakpoints.up('sm')]: {
        width: '45vh',
      },
      [theme.breakpoints.up('md')]: {
        justifySelf: 'start',
        width: '65vh',
      },
    },
    root: {
      display: 'grid',
      rowGap: '30px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateAreas: `
        'paper paper paper'
        'picture picture picture'
     `,
      width: '100%',
      height: '100%',
      [theme.breakpoints.up('md')]: {
        rowGap: '0',
        columnGap: '50px',
        gridTemplateRows: 'repeat(4, 1fr)',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridTemplateAreas: `
          'paper paper paper paper paper paper paper picture picture picture picture picture'
          'paper paper paper paper paper paper paper picture picture picture picture picture'
          'paper paper paper paper paper paper paper picture picture picture picture picture'
          'paper paper paper paper paper paper paper picture picture picture picture picture'
        `,
      },
    },
  }),
);

interface HeaderProps {
  subtitle: string;
  title: string;
}

const Header = ({ subtitle, title }: HeaderProps) => {
  const classes = useStyles();
  return (
    <Fade in={true} timeout={2000}>
      <div className={classes.root}>
        <Paper className={classes.paper} elevation={0}>
          <Typography align="center" variant="h3" component="h1" gutterBottom>
            {title}
          </Typography>
          <Typography align="center" color="textSecondary" variant="h5" component="h2" gutterBottom>
            {subtitle}
          </Typography>
          <SocialButtons />
        </Paper>
        <Avatar
          alt="Terencio Agozzino"
          variant="square"
          src={require('../assets/picture.jpg')}
          className={classes.picture}
        />
      </div>
    </Fade>
  );
};

export default Header;
