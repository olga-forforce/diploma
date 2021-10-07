import React, { useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Items, NameItem } from './AddItems.module.scss';
import Button from "../Forms/Button";

function AddItems (props) {
    const { setElem, elem } = props;
    const [name, setName] = useState('');

    const onSubmit = (event) => {
        setName('');
        setElem([{ id: uuidv4(), text:name}, ...elem]);
        event.preventDefault();
        // if (event.value !== ''){
        //     setName(event.value);
        // }
    }

    const handleChange = (event) => {
        if (event.target.value.length !== 50) {
            setName(event.target.value)
        }
        // if(setName.value === '') {
        //     return false;
        // }
    }

    return (
        <form className={Items} onSubmit={onSubmit}>
            <input
                value={name}
                onChange={handleChange}
                className={NameItem} id="name" type="text" placeholder="Name..." />
            <Button type="submit" name="Add Item"/>
        </form>
    );
}

export default AddItems;