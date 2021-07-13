import React from 'react';

import './App.css';
import { useState } from "react";
import { orange } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';
import { deepOrange } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors';
import {useDispatch, useSelector} from 'react-redux'
import Quize from './component/Quize'
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Switch from '@material-ui/core/Switch';
import {RootState} from './redux/rootReducer'

function App() {
  const palletType = useSelector( (state:RootState) => state.palet.isDark)
  const mainPrimaryColor = palletType ? orange[500] : lightBlue[500];
  const mainSecondaryColor = palletType ? deepOrange[900] : deepPurple[500];
  //наша тема необходимо поигарться с цветами
  const darkTheme = createTheme({
    palette: {
     
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    }
  });

 
  
  return (<ThemeProvider theme={darkTheme}>
    <Quize/>
    </ThemeProvider>
  );




}

export default App;
