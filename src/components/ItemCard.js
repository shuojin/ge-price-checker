import React from 'react';

const ItemCard = ({item}) => {
    return (
        <div className="item">
            <div className="image">
                <img src={item.icon_large} alt={item.description} />
            </div>
            <div className="content">
                <div className="header">{item.name}</div>
                <div className="meta">
                    <span>Price: {item.current.price}</span>
                </div>
                <div className="description">
                    <p>{item.description}</p>
                </div>
                <div className="extra">
                    Today's price change: {item.today.price}, Trend: {item.today.trend}
                </div>
            </div>
        </div>
    )
}

export default ItemCard;