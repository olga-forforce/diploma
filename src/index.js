import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './index.module.scss';
import Header from './components/Header';
import AddItems from './components/AddItems';

ReactDOM.render(
  <React.StrictMode>
      <div className={Form}>
    <Header />
    <AddItems />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);