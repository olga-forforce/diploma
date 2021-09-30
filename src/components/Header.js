import React from 'react';
import { NameForm, AppHeader, Search } from './Header.module.scss';

function Header() {

  return (
    <div className={AppHeader}>
      <header className={NameForm}>
        <p>
         To Do List
        </p>
          <input
              className={Search} id="name" type="text" placeholder="search" />
      </header>
    </div>
  );
}

export default Header;
