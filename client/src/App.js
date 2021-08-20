import './App.css';
import { useState, useEffect } from 'react';
import {Switch, Route, useHistory} from 'react-router-dom'
import Layout from './layout/Layout';
import Login from './screens/Login/Login';
import Register from './screens/Register/Register';
import MainContainer from './containers/MainContainer';


function App() {
  




  return (
    <Layout>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/'>
          <MainContainer />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
