import React from 'react';

import osrs from '../apis/osrs';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

class App extends React.Component {
    state = { items: [], selectedItem: null }

    onTermSubmit = async term => {
        const response = await osrs.get('/items.json', {
            params: {
                category: 1,
                alpha: term
            }
        })

        console.log(response);
        this.setState({
            items: response.data.items
        })
    }

    render() {
        return (
            <div className="ui container">
                <h1>Grand Exchange Price Checker</h1>
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <ItemList 
                    items={this.state.items}
                />
            </div>
        )
    }
}

export default App;