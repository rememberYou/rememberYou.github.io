import * as React from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { SOCIAL_LINKS } from '../constants/social-links';

const useStyles = makeStyles()(({ spacing }) => ({
  button: {
    margin: spacing(0, 1),
  },
  icon: {
    fontSize: spacing(4),
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const SocialButtons = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      {SOCIAL_LINKS.map((link: any, index: number) => {
        const IconTag = link.icon;
        return (
          <Tooltip key={index} title={link.title}>
            <IconButton
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
