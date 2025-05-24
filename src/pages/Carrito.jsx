import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Carrito() {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🛒 Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
                <button onClick={() => removeFromCart(item.id)}>❌</button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
}

export default Carrito;
