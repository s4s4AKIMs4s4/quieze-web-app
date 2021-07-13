import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './menu'
import Main from './test'
import Button from './button'
import { useState } from "react";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  // const [darkState, setDarkState] = useState(false);
  // const palletType = darkState ? "dark" : "light";
  // const mainPrimaryColor = darkState ? orange[500] : lightBlue[500];
  // const mainSecondaryColor = darkState ? deepOrange[900] : deepPurple[500];

  const THEME = createMuiTheme({
    palette: {
      type: 'dark',
    },
  });


  
  return (
    <>
    <Menu/>
    <Button/>
    </>
  );




}

export default App;
