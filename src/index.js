import React from 'react';
import ReactDOM from 'react-dom';
import { Form } from './index.module.scss';
import Header from './ui/components/Header/Header';
import AddItems from './ui/components/NewItems/AddItems';
import Items from "./ui/components/Items/Items";

ReactDOM.render(
  <React.StrictMode>
      <div className={Form}>
    <Header />
    <AddItems />
    <Items />
      </div>
  </React.StrictMode>,
  document.getElementById('root')
);