import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Page from './components/Page';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="">
        <Page />
      </Route>
    </BrowserRouter>
  );
}

export default App;
