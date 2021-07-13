import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu'
import Main from './test'
import Buttons from './button'
import { useState } from "react";
import { orange } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';
import { deepOrange } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors';
import { green } from '@material-ui/core/colors';
import Quize from './forms'
import TextField from '@material-ui/core/TextField';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';

function App() {
  const [darkState, setDarkState] = useState(false);
  const palletType = darkState ? "dark" : "light";
  const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

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

  const handleThemeChange = () => {
    setDarkState(!darkState);
  };

  
  return (<ThemeProvider theme={darkTheme}>
    <Switch checked={darkState} onChange={handleThemeChange} />
    <Quize/>
    </ThemeProvider>
  );




}

export default App;
