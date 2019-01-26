import React from 'react';

import osrs from '../apis/osrs';
import SearchBar from './SearchBar';
import ItemList from './ItemList';

import './App.css';

class App extends React.Component {
    state = { items: [], selectedItem: null }

    componentDidMount() {
        document.title = 'OSRS Grand Exchange Price Checker';
        this.onTermSubmit('a');
    }

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
                <h1 class="ui center aligned icon header">
                    <i class="circular money bill alternate outline icon"></i>
                    Grand Exchange Price Checker
                </h1>

                <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column">
                        
                        </div>
                        <div className="six wide column">
                            <ItemList 
                                items={this.state.items}
                            />
                        </div>
                    </div>
                </div>     
            </div>
        )
    }
}

export default App;