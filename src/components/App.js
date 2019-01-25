import React from 'react';

import osrs from '../apis/osrs';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

class App extends React.Component {
    state = { items: [], selectedItem: null }

    onTermSubmit = async term => {
        const response = await osrs.get('/items.json?category=1&alpha=', {
            
        })
    }

    render() {
        return (
            <div className="ui container">
                <h1>Grand Exchange Price Checker</h1>
                <SearchBar />
                <ItemList />
            </div>
        )
    }
}

export default App;