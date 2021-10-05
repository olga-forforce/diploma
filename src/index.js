import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './index.module.scss';
import App from "./ui/conteiners/App";


ReactDOM.render(
  <React.StrictMode>
      <div className={Form}>
    <App />

      </div>
  </React.StrictMode>,
  document.getElementById('root')
);