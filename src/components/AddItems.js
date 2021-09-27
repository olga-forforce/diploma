import React from 'react';
import { Items, ButtonAdd } from './AddItems.module.scss';
import {Search} from "./Header.module.scss";

function AddItems () {
    return (
        <div className={Items}>
            <input className={Search} id="name" type="text" />
            <input className={ButtonAdd} type="submit" value="Add Item" />
        </div>
    );
}

export default AddItems;