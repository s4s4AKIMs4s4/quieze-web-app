import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        marginTop:'10vh',
        marginLeft:'20vw',  
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(50),
      },
    },
  }),
);

export default function SimplePaper( {children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={3}>
          {children}
    </Paper>
    </div>
  );
}