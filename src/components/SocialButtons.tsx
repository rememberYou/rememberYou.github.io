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
          <Tooltip title={link.title}>
            <IconButton
              key={index}
              aria-label={link.label}
              className={classes.button}
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              <IconTag className={classes.icon} style={{ color: link.color }} />
            </IconButton>
          </Tooltip>
        );
      })}
    </div>
  );
};

export default SocialButtons;
