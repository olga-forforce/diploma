import React from 'react';
import { Items, ButtonAdd, Name } from './AddItems.module.scss';

function AddItems () {
    return (
        <div className={Items}>
            <input className={Name} id="name" type="text" placeholder="Name..." />
            <input className={ButtonAdd} type="submit" value="Add Item" />
        </div>
    );
}

export default AddItems;