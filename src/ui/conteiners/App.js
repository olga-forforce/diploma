import React, {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Header from "../components/Header/Header";
import AddItems from "../components/NewItems/AddItems";
import Items from "../components/Items/Items";

function App() {
    const [elem, setElem] = useState([
        { id: uuidv4(), text:'Do JavaScript Projects', priopity: true},
        {id: uuidv4(), text:'Learn NodeJS', priopity: false},
        {id: uuidv4(), text:'Learn ReactJS', priopity: true},
        {id: uuidv4(), text:'Learn GraphQL', priopity: true}]);
    return (
        <>
            <Header/>
            <AddItems setElem={setElem} elem={elem} />
            <Items elem={elem} />
        </>
    );
}

export default App;