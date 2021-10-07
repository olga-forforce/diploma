import React from 'react';
import { Item, Emoji, List } from './Items.module.scss';
import Button from "../Forms/Button";


export default function Items (props) {
    const {elem} = props;
    const top = elem;
    const bottom = props;

    return (
        <>
            {elem.map((item) => {
                return (
                    <div className={Item} key={item.id}>
                        <p className={List}>{item.text}</p>
                        <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
                    </div>
                )}
            )}
            <Button name="Clear Items"/>
        </>
    )


}
