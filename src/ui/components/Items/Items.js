import React, { useState } from 'react';
import { Item, Emoji, List } from './Items.module.scss';
import Button from "../Forms/Button";


export default function Items (props) {

    const {elem} = props;
    // const [elem, setElem] = useState([{ id: 1, text:'Do JavaScript Projects'},
    //     {id: 2, text:'Learn NodeJS'}, {id: 3, text:'Learn ReactJS'}, {id: 4, text:'Learn GraphQL'}]);

    return (
        <>
        {elem.map((item) => {
            console.log(item)
            return (
                <>
                    <div className={Item}>
                        <p className={List}>{item.text}</p>
                        <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
                    </div>
                </>
            )}
        )}
         <Button name="Clear Items"/>
         </>
    )

}
