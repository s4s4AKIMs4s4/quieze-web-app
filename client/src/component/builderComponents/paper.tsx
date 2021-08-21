import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from '../cssModules/paper';


function SimplePaper( {children}) {
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


export default  React.memo(SimplePaper)