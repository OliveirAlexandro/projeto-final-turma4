import PropTypes from 'prop-types';

const CheckoutScreen = ({ cart, removeFromCart }) => {
  const totalValue = Object.values(cart).reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      {Object.values(cart).map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>Preço: ${product.price}</p>
          <p>Quantidade: {product.quantity}</p>
          <p>Subtotal: ${(product.price * product.quantity).toFixed(2)}</p>
          <button onClick={() => removeFromCart(product.id)}>Remover</button>
        </div>
      ))}
      <div>
        <p>Valor Total: ${totalValue.toFixed(2)}</p>
        <button onClick={() => alert('Finalizar Compra')}>Finalizar Compra</button>
      </div>
    </div>
  );
};

CheckoutScreen.propTypes = {
  cart: PropTypes.object.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default CheckoutScreen;