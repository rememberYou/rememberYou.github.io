import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Fade,
  IconButton,
  Theme,
  Typography,
  createStyles,
  makeStyles,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import { EMAIL, GITHUB, LINKEDIN } from '../constants/contacts';

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
    gitHubIcon: {
      fontSize: theme.spacing(4),
      color: '#181410',
    },
    icons: {
      display: 'flex',
      justifyContent: 'center',
    },
    linkedInIcon: {
      fontSize: theme.spacing(4),
      color: '#0075B5',
    },
    mailIcon: {
      fontSize: theme.spacing(4),
      color: '#C64D42',
    },
    mainTitle: {
      fontSize: '2.125rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '3rem',
      },
    },
    secondTitle: {
      fontSize: '1.25rem',
      [theme.breakpoints.up('sm')]: {
        fontSize: '1.5rem',
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
  subtitle: JSX.Element;
  title: string;
}

const Header = (props: HeaderProps) => {
  const classes = useStyles();
  const { subtitle, title } = props;
  return (
    <Fade in={true} timeout={1000}>
      <div className={classes.root}>
        <Card className={classes.card} elevation={0}>
          <CardContent className={classes.content}>
            <Typography
              align="center"
              className={classes.mainTitle}
              variant="h3"
              component="h1"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography align="center" variant="h5" color="textSecondary" component="h2">
              {subtitle}
            </Typography>
          </CardContent>
          <div className={classes.icons}>
            <IconButton aria-label="GitHub" target="_blank" href={GITHUB}>
              <GitHubIcon className={classes.gitHubIcon} />
            </IconButton>
            <IconButton color="primary" aria-label="LinkedIn" target="_blank" href={LINKEDIN}>
              <LinkedInIcon className={classes.linkedInIcon} />
            </IconButton>
            <IconButton
              color="secondary"
              aria-label="Mail"
              target="_blank"
              href={`mailto:${EMAIL}`}
            >
              <EmailIcon className={classes.mailIcon} />
            </IconButton>
          </div>
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
