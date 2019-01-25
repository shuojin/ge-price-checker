import React from 'react';

import ItemCard from './ItemCard';

const ItemList = ({items}) => {
    const renderedList = items.map(item => {
        return <ItemCard key={item.id} item={item} />
    })
    
    return (
        <div className="ui items">
            {renderedList}
        </div>
    )
}

export default ItemList;