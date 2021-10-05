import React from 'react';
import { ButtonAdd } from "../NewItems/AddItems.module.scss";

export default function Button (props) {
    const {name, type = 'button' } = props;
    return (
        <button className={ButtonAdd} type={type} value="Add Item">{name}</button>
    )
}