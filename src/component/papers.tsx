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
        marginLeft:'15vw',  
        margin: theme.spacing(1),
        width: theme.spacing(130),
        height: theme.spacing(80),
      },
    },
  }),
);

export default function SimplePaper( {children}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <Paper elevation={5}>
          {children}
          
    </Paper>
    </div>
  );
}