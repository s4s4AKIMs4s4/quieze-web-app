import React from 'react';

import './App.css';
import { useState } from "react";
import { orange } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';
import { deepOrange } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux'
import Quize from './component/Quize'
import { createTheme, ThemeProvider,makeStyles,Theme } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';
import {RootState} from './redux/rootReducer'
import CssBaseline from '@material-ui/core/CssBaseline';


let useStyles = makeStyles((theme: Theme) =>({
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
    backgroundColor:theme.palette.primary.main,
  },
  
}));



function App() {
  const palletType = useSelector( (state:RootState) => state.palet.isDark)
  const type = (!palletType) ? "dark" : "light"
  const mainPrimaryColor = palletType ? orange[500] : lightBlue[500];
  const mainSecondaryColor = palletType ? deepOrange[900] : deepPurple[500];
  

  //наша тема необходимо поигарться с цветами
  const darkTheme = createTheme({
    palette: {
      type: type,
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      },
      
    }
  });
  
  const classes = useStyles();
  console.log(classes)
  return (<ThemeProvider theme={darkTheme}>
     <CssBaseline />
    
    <Quize/>
   
    </ThemeProvider>
  );




}

export default App;
