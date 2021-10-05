import React, { useState} from 'react';
import { Items, NameItem } from './AddItems.module.scss';
import Button from "../Forms/Button";

function AddItems (props) {
    const { setElem } = props;
    const [name, setName] = useState('');

    const handleChange = (event) => {
        if (event.target.value.length !== 50) {
            setName(event.target.value)
        }
    }
    return (
        <form className={Items} onSubmit={}>
            <input
                value={name}
                onChange={handleChange}
                className={NameItem} id="name" type="text" placeholder="Name..." />
            <Button name="Add Item"/>
        </form>
    );
}

export default AddItems;