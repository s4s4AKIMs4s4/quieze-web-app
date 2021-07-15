import React from 'react';
import Button from '@material-ui/core/Button';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    test:{
        position:'relative',
        top:'1vh',
        left:'32vw',
        
      },
    })
)


export default function Buttons() {
    const classes = useStyles();
return(
    <form className={classes.test} noValidate autoComplete="off">
        <div>
        
            <Button>Back</Button>
            <Button>Next</Button>
            <Button>Save</Button>
        
        </div>
    </form>
    );

}