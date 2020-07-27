import React, { Component } from 'react';


import MainNavigation from '../components/MainNavigation';
import { addProductToCart } from '../store/actions';
import './Products.css';

import ShopContext from '../context/Shop_Context'

class ProductsPage extends Component {

  static contextType=ShopContext

  render() {
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={this.context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)} />
        <main className="products">
          <ul>
            {this.context.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={this.context.addProductToCart.bind(this, product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
  }
}


export default ProductsPage;
