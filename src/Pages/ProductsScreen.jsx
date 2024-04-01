import { useState, useEffect } from 'react';

const ProductsScreen = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const addToCart = (product) => {
    setCart(prevCart => {
      const quantity = prevCart[product.id] ? prevCart[product.id].quantity + 1 : 1;
      return { ...prevCart, [product.id]: { ...product, quantity } };
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => {
      const newCart = { ...prevCart };
      if (newCart[productId].quantity === 1) {
        delete newCart[productId];
      } else {
        newCart[productId].quantity -= 1;
      }
      return newCart;
    });
  };

  const totalValue = Object.values(cart).reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div>
      {products.map(product => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Adicionar ao Carrinho</button>
          {cart[product.id] && (
            <button onClick={() => removeFromCart(product.id)}>Remover do Carrinho</button>
          )}
        </div>
      ))}
      <div>
        <p>Valor Total: ${totalValue.toFixed(2)}</p>
        <button onClick={() => alert('Checkout')}>Checkout</button>
      </div>
    </div>
  );
};

export default ProductsScreen;