import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Fade,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';
import SocialButtons from './SocialButtons';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#fafafa',
    },
    content: {
      paddingBottom: '0',
    },
    },
    picture: {
      display: 'flex',
      height: '60vh',
      width: '50vh',
      marginLeft: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        height: '70vh',
        width: '60vh',
        marginLeft: theme.spacing(8),
      },
      [theme.breakpoints.up('md')]: {
        alignSelf: 'flex-end',
        height: '80vh',
        width: '70vh',
        marginLeft: theme.spacing(0),
      },
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '100vh',
      overflow: 'hidden',
      [theme.breakpoints.up('md')]: {
        justifyContent: 'flex-end',
        flexDirection: 'row',
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
    <Fade in={true} timeout={1000}>
      <div className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <CardContent className={classes.content}>
            <Typography align="center" variant="h3" component="h1" gutterBottom>
              {title}
            </Typography>
            <Typography
              align="center"
              variant="h5"
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              {subtitle}
            </Typography>
            <SocialButtons />
          </CardContent>
        </Card>
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
