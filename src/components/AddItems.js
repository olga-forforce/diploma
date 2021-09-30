import React, { useState} from 'react';
import { Items, ButtonAdd, NameItem } from './AddItems.module.scss';

function AddItems () {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        if (event.target.value.length !== 50) {
            setName(event.target.value)
        }
    }
    return (
        <div className={Items}>
            <input
                value={name}
                onChange={handleChange}
                className={NameItem} id="name" type="text" placeholder="Name..." />
            <input className={ButtonAdd} type="submit" value="Add Item" />
        </div>
    );
}

export default AddItems;