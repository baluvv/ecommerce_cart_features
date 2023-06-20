import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const amounts = cartList.map(
        eachItem => parseInt(eachItem.price) * parseInt(eachItem.quantity),
      )
      const totalAmount = amounts.reduce(
        (sumAmount, currentAmount) => sumAmount + currentAmount,
      )
      return (
        <div className="cart-summary-container">
          <div className="amount-container">
            <h1 className="order-total">Order Total</h1>
            <h1 className="amount-heading">: {`Rs ${totalAmount}/-`}</h1>
          </div>
          <p className="items-in-cart">{cartList.length} Items in cart</p>
          <button type="button" className="checkout-button">
            Checkout
          </button>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
