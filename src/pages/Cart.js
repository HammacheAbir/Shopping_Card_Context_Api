import React, { useContext} from 'react';


import MainNavigation from '../components/MainNavigation';
import './Cart.css';

import ShopContext from "../context/Shop_Context"

const CartPage =props=>{

  const context = useContext(ShopContext)
  

    return (
      <React.Fragment>
        <MainNavigation cartItemNumber={context.cart.reduce((count, curItem) => {
      return count + curItem.quantity;
    }, 0)} />
        <main className="cart">
          {context.cart.length <= 0 && <p>No Item in the Cart!</p>}
          <ul>
            {context.cart.map(cartItem => (
              <li key={cartItem.id}>
                <div>
                  <strong>{cartItem.title}</strong> - ${cartItem.price} (
                  {cartItem.quantity})
                </div>
                <div>
                  <button
                    onClick={context.removeProductFromCart.bind(
                      this,
                      cartItem.id
                    )}
                  >
                    Remove from Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </React.Fragment>
    );
}

export default CartPage;
