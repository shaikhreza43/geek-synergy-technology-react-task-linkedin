import React,{Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
import { PrivateRoute } from './utils/PrivateRoute';

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={Signup}></Route>
            <PrivateRoute exact path="/" component={Home}></PrivateRoute>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
