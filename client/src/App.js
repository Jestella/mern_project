import React, { Fragment } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Landing } from './components/Landing';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';

import './App.css';

const App = () => (
  <BrowserRouter>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path='/' component={Landing} />
      </Routes>
      <section className='container'>
        <Routes>
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Routes>
      </section>
    </Fragment>
  </BrowserRouter>
);

export default App;
