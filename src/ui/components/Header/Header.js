import React from 'react';
import { NameForm, AppHeader } from './Header.module.scss';
import Search from "../Search/Search";


function Header() {

  return (
    <div className={AppHeader}>
      <header className={NameForm}>
        <p>
         To Do List
        </p>
          <Search />
      </header>
    </div>
  );
}

export default Header;
