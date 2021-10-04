import React from 'react';
import { ButtonAdd } from "../NewItems/AddItems.module.scss";

export default function Button (props) {
    const {name} = props;
    return (
        <button className={ButtonAdd} type="submit" value="Add Item">{name}</button>
    )
}