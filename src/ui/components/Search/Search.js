import React from 'react';
import { Filter, Img } from './Search.module.scss';
import Button from "../Forms/Button";

export default function Search() {
    return (
        <div>
        <input
            className={Filter} id="name" type="text" placeholder="search" />
            <Button className={Img} name="O"/>
            </div>
    )

}

