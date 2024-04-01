import PropTypes from 'prop-types';

const Cart = ({ cart, removeFromCart }) => {
  return (
    <div className="cart">
      {Object.values(cart).map(product => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Quantidade: {product.quantity}</p>
          <button onClick={() => removeFromCart(product.id)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
