import debounce from 'lodash.debounce';
import React, { useCallback } from 'react';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import Buttons from './nextButtons'
import { useEffect,useMemo,useState } from 'react';
import FormNext from './FormNext';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Menu from '../commonComponents/menu'


export default function TestButton(){
    const [it,SetIt] = useState('')

    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        '& > *': {
          margin: theme.spacing(1),
          width: '25ch',
          color:'red',
        
        },
      },
    }),
  );
  

    useEffect(()=>{console.log('dfdf')},[])
    const classes = useStyles();

    const TextHandlert = (event) =>{
        //event.persist()
        SetIt(event.target.value)
        console.log(event.target.value)
        let obj = event.target.value


    } 


      
  
    const debouncedTextHandler = useCallback(
          debounce(TextHandlert, 300)
    , [])

    return (
        <>
        <Menu/>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange ={debouncedTextHandler} />
        <TextField id="outlined-basic" label="Outlined" variant="outlined" onChange ={debouncedTextHandler} />
        <TextField value ={it} id="outlined-basic" label="Outlined" variant="outlined" onChange ={debouncedTextHandler} />
      </form>
        </>
    )
}