import React from 'react';
import { createStyles, makeStyles, Theme, alpha } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { green } from '@material-ui/core/colors';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {

        margin: theme.spacing(3),
        width: '80%',
        marginTop: '40px',
        marginLeft: '10%',
        marginRight: '10%'
        // backgroundColor: theme.palette.primary.dark,


      },
    },
    cen: {

      '& input:valid + fieldset': {
        borderColor: theme.palette.primary.main,
        borderWidth: 1,

      },

      '& > *': {

        margin: theme.spacing(3),
        width: '30ch',
        marginTop: '80px',
        marginLeft: '15%',
        
        // backgroundColor: theme.palette.primary.dark,


      },
    },
    but: {
      '& > *': {

        margin: theme.spacing(1),
        marginTop: '15%',
        marginLeft: '70%'
      }
      
    },
  }),
);

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <>
      <form className={classes.root} noValidate autoComplete="off">
        {/* <TextField id="standard-basic" label="Standard"  />
      <TextField id="filled-basic" label="Filled" variant="filled" /> */}

        <TextField  id="outlined-basic" label="Enter a question" variant="outlined" />
        
      </form>
      <Divider variant="middle" />
      <form className={classes.cen} noValidate autoComplete="off">
        
        <TextField id="outlined-basic" label="Enter a answer" variant="outlined" />
      </form>
      <form className={classes.but} noValidate autoComplete="off">
        <div>
        <Button>Back</Button>
        <Button>Next</Button>
        <Button>Save</Button>
        </div>
      </form>
    </>
  );
}