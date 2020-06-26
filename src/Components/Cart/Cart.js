import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from '../Cart/CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';
export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {value => {
                        const {Cart} =value;
                        if(Cart.length > 0) {
                            return(
                                <React.Fragment>
                                    <Title name="your " title="card" />
                                    <CartColumns />
                                    <CartList value={value} />
                                    <CartTotals value={value} history={
                                        this.props.history
                                    } />
                                </React.Fragment>
                            );
                        }
                        else {
                            return  <EmptyCart />;
                        }
                        
                    }}
                    
                        
                </ProductConsumer>
            </section>
        );
    }
}
