import React, { useState} from 'react';
import { Items, NameItem } from './AddItems.module.scss';
import Button from "../Forms/Button";

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
            <Button name="Add Item"/>
        </div>
    );
}

export default AddItems;