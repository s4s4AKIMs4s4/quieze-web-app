import React from 'react';

import './App.css';
import { orange } from '@material-ui/core/colors';
import { lightBlue } from '@material-ui/core/colors';
import { deepOrange } from '@material-ui/core/colors';
import { deepPurple } from '@material-ui/core/colors';
import {useSelector} from 'react-redux'
import Quize from './component/builderComponents/builderQuize'
import { createTheme, ThemeProvider,makeStyles,Theme } from "@material-ui/core/styles";
import {RootState} from './redux/rootReducer'
import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from './component/gameComponents/game'
import useStyles from './component/cssModules/app';
import { useEffect } from 'react';
import TestGame from './component/builderComponents/testGame';


const url : string = process.env.REACT_APP_API as string

function App() {
  const palletType = useSelector( (state:RootState) => state.palet.isDark)
  const type = (!palletType) ? "light" : "dark"
  const mainPrimaryColor = palletType ? orange[500] : lightBlue[500];
  const mainSecondaryColor = palletType ? deepOrange[900] : deepPurple[500];
  

  // useEffect(() =>{
  //   fetch(url)
  //     .then(response => response.text())
  //     .then(text => console.log(text))      
  // }, [])



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
  return (
  
  <Router>
    <Switch>
    <Route path="/gameNotes/:id" exact component={Game}/>
      <Route path="/" exact>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Quize/>
        </ThemeProvider>
      </Route>
      <Route path="/game" exact>
        <Game/>
      </Route>
      
        
      
    </Switch>
  </Router>
  );




}

export default App;
