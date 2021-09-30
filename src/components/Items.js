import React from 'react';
import { Item, Emoji, List } from './Items.module.scss';


function Items () {
    return (
        <>
        <div className={Item}>
            <p className={List}>Do JavaScript Projects</p>
            <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
        </div>
            <div className={Item}>
                <p className={List}>Learn NodeJS</p>
                <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
            </div>
            <div className={Item}>
                <p className={List}>Learn ReactJS</p>
                <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
            </div>
            <div className={Item}>
                <p className={List}>Learn GraphQL</p>
                <div className={Emoji}><p>⭐</p><p>✔️</p><p>✏️</p><p>❌</p></div>
            </div>
        </>
    );
}

export default Items;