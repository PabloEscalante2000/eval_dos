import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Clientes from "./pages/Clientes.js";
import Inicio from "./pages/Inicio.js";
import Proveedores from "./pages/Proveedores.js";
import Header from './Header.js';

ReactDOM.render(
  <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Inicio/>}/>
        <Route exact path="/proveedores" element={<Proveedores/>}/>
        <Route exact path="/clientes" element={<Clientes/>}/>
      </Routes>
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// https://preview.themeforest.net/item/fixtor-handyman-home-repair-wordpress-theme/full_screen_preview/34216735?_ga=2.266875981.217640675.1646346370-1127167443.1646346370
reportWebVitals();
