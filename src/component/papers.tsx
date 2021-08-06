import React from 'react';
import Paper from '@material-ui/core/Paper';
import useStyles from './cssModules/paper';


// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     test:{
//       position:'fixed',
//       top:'85vh',
//       left:'65vw',

//     },
//     root: {
//       display: 'flex',
     
//       flexWrap: 'wrap',
//       '& > *': {
        
//         marginTop:'12vh',
//         marginLeft:'9vw',
//         marginRight:'9vw',  
//         margin: theme.spacing(1),
//         width:'100%',
//         height: theme.spacing(80),
//       },
//     },
//   }),
// );





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