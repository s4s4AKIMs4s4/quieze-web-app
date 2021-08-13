
import { useState, useEffect } from 'react';
import axios from 'axios'
import Button from '@material-ui/core/Button';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import Menu from '../commonComponents/menu'
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import { ClassSharp } from '@material-ui/icons';
import {useSelector } from 'react-redux';
import { RootState } from '../../redux/rootReducer';


const url = 'https://quize-e13b8-default-rtdb.europe-west1.firebasedatabase.app'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
   paper:{
       position:'absolute',
       width:'250px',
       height:'200px',
       margin:'auto',
       textAlign:'center',
       top:'0',
       left:'0',
       bottom:'0',
       right:'0',
       fontSize:'1.4rem',

   },

   wrapper:{
        position:'relative',
        width:'100vw',
        height:'100vh'
   },
   textAllign:{
    position:'relative',
    top:'30%',

   }
}),

);





export default  function Game(props){

    const generatedLink  = useSelector( (state:RootState) => state.link?.link)

    const classes = useStyles();
    const theme = useTheme();


    return (
        <>
            <Menu/>
            <div className = {classes.wrapper}>
            <Paper className ={classes.paper} >
                <div className = {classes.textAllign}> 
                    Link generated!
                    <div></div>
                    <Link href = {generatedLink} > {generatedLink} </Link>
                </div> 
            </Paper>
            </div>
        </>
    )
}