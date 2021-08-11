import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from '../cssModules/paper';


export default function SimplePaper( {children}) {
  const classes = useStyles();
  
  return (
    <>
      <div className={classes.root} >
        <Paper elevation={5} >
            {children}
        </Paper>
      </div>
    </>
  );
}