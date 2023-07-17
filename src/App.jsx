/** @format */

import * as React from 'react';
import Home from './containers/home';
import './style.css';
import Login from './containers/login';
import Header from './components/header';

export default function App() {
  return (
    <>
      <Header />
      <Login />
    </>
  );
}
