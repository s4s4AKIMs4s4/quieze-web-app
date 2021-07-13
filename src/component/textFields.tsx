import React from 'react';
import { createStyles, makeStyles, Theme,alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 2,
      },

      '& > *': {
        border: '1px',
        borderColor: theme.palette.primary.main,
        margin:theme.spacing(3),
        width: '25ch',
        marginTop:'200px',
        // backgroundColor: theme.palette.primary.dark,
        
      },
    
   
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();
  
  return (
    
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Standard"  />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
    </form>
    
  );
}