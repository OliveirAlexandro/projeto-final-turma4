import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsScreen = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data));
  }, [id]);

  return product ? (
    <div>
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <p>Avaliação: {product.rating.rate} ({product.rating.count} avaliações)</p>
    </div>
  ) : <p>Carregando...</p>;
};

export default ProductDetailsScreen;