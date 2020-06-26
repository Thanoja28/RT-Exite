import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
    const {Cart} = value;
    return (
        <div className="container-fluid">
            {Cart.map(item => {
                return  <CartItem key={item.id} 
                item={item} value={value} />
            })}
        </div>
    );
}
