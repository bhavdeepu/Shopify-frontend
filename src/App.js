import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/Theme";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from 'react';

import Header from './components/main/Header';
import Footer from './components/main/Footer';
import Home from './components/main/Home';
import SimpleContainer from './components/register/Register';
import SimpleContainer2 from './components/register/Register2';
import Admin from './components/admin/Admin';


function App() {
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
        <Route path='/' component={Home} exact />
        <Route path='/account_setup' component={SimpleContainer} />
        <Route path='/account_details' component={SimpleContainer2} />
        <Route path='/admin' component={Admin} />        
     </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
