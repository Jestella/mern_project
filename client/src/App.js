import React, { Fragment } from "react";
import { Router, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Landing } from "./components/Landing";
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register";

import "./App.css";

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <section className="container">
        <Routes>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Routes>
      </section>
    </Fragment>
  </Router>
);

export default App;
