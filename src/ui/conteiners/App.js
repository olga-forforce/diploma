import React, {useState} from 'react';
import Header from "../components/Header/Header";
import AddItems from "../components/NewItems/AddItems";
import Items from "../components/Items/Items";

function App() {
    const [elem, setElem] = useState([{ id: 1, text:'Do JavaScript Projects'},
        {id: 2, text:'Learn NodeJS'}, {id: 3, text:'Learn ReactJS'}, {id: 4, text:'Learn GraphQL'}]);
    return (
        <>
            <Header/>
            <AddItems setElem={setElem} elem={elem} />
            <Items elem={elem} />
        </>
    );
}

export default App;