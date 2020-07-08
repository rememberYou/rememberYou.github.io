import * as React from 'react';
import {
  Avatar,
  Card,
  CardContent,
  Fade,
  IconButton,
  Theme,
  Typography,
  WithStyles,
  createStyles,
  withStyles,
} from '@material-ui/core';

import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const styles = (theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#fafafa',
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
      fontSize: "2.125rem",
      [theme.breakpoints.up('sm')]: {
        fontSize: "3rem",
      },
    },
    secondTitle: {
      fontSize: "1.25rem",
      [theme.breakpoints.up('sm')]: {
        fontSize: "1.5rem",
      },
    },
    picture: {
      display: 'flex',
      height: '40vh',
      width: '30vh',
      marginLeft: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        height: '60vh',
        width: '50vh',
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
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100vh',
      [theme.breakpoints.up('md')]: {
        flexDirection: 'row',
      },
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  classes: any;
  subtitle: JSX.Element;
  title: string;
}

class Header extends React.Component<HeaderProps> {
  render() {
    const { classes, subtitle, title } = this.props;
    return (
      <Fade in={true} timeout={1000}>
        <div className={classes.root}>
          <Card className={classes.card} elevation={0}>
            <CardContent>
              <Typography
                align="center"
                className={classes.mainTitle}
                variant="h3"
                component="h1"
                gutterBottom
              >
                {title}
              </Typography>
              <Typography
                align="center"
                className={classes.secondaryTitle}
                variant="h5"
                color="textSecondary"
                component="h2"
              >
                {subtitle}
              </Typography>
            </CardContent>
            <div className={classes.icons}>
              <IconButton aria-label="GitHub" target="_blank" href="https://github.com/rememberYou">
                <GitHubIcon className={classes.gitHubIcon} />
              </IconButton>
              <IconButton
                color="primary"
                aria-label="LinkedIn"
                target="_blank"
                href="https://www.linkedin.com/in/terencioagozzino/"
              >
                <LinkedInIcon className={classes.linkedInIcon} />
              </IconButton>
              <IconButton
                color="secondary"
                aria-label="Mail"
                target="_blank"
                href="mailto:terencio.agozzino@gmail.com"
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
  }
}

export default withStyles(styles)(Header);
