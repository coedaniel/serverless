import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);

  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <input
        type="number"
        value={quantity}
        min={1}
        onChange={e => setQuantity(Number(e.target.value))}
        style={styles.input}
      />
      <button onClick={() => addToCart(product, quantity)} style={styles.button}>
        Agregar al carrito
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ccc',
    padding: '1rem',
    margin: '1rem',
    width: '220px',
    borderRadius: '10px',
    backgroundColor: '#f9f9f9'
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover'
  },
  input: {
    width: '60px',
    marginTop: '0.5rem'
  },
  button: {
    marginTop: '0.5rem',
    padding: '0.5rem',
    backgroundColor: '#2563eb',
    color: 'white',
    border: 'none',
    borderRadius: '5px'
  }
};

export default ProductCard;
