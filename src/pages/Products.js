import React, {useContext} from 'react';


import MainNavigation from '../components/MainNavigation';
import './Products.css';

import ShopContext from '../context/Shop_Context'

const ProductsPage = props=> {

  const context= useContext(ShopContext)

  
    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)} />
        <main className="products">
          <ul>
            {context.products.map(product => (
              <li key={product.id}>
                <div>
                  <strong>{product.title}</strong> - ${product.price}
                </div>
                <div>
                  <button
                    onClick={context.addProductToCart.bind(this, product)}
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


export default ProductsPage;
