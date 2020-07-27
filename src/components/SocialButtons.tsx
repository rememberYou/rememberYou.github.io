import * as React from 'react';
import { IconButton, Theme, Tooltip, createStyles, makeStyles } from '@material-ui/core';
import { SOCIAL_LINKS } from '../constants/social-links';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(0, 1),
    },
    icon: {
      fontSize: theme.spacing(4),
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  }),
);

const SocialButtons = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {SOCIAL_LINKS.map((link: any, index: number) => {
        const IconTag = link.icon;
        return (
          <IconButton key={index} className={classes.button} target="_blank" href={link.url}>
            <Tooltip title={link.title}>
              <IconTag className={classes.icon} style={{ color: link.color }} />
            </Tooltip>
          </IconButton>
        );
      })}
    </div>
  );
};

export default SocialButtons;
