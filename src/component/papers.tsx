import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import ButtonField from './Burroons'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test:{
      position:'fixed',
      top:'85vh',
      left:'65vw',

    },
    root: {
      display: 'flex',
     
      flexWrap: 'wrap',
      '& > *': {
        
        marginTop:'12vh',
        marginLeft:'9vw',
        marginRight:'9vw',  
        margin: theme.spacing(1),
        width:'100%',
        height: theme.spacing(80),
      },
    },
  }),
);

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