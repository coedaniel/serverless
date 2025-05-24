import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Orden() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const confirmarCompra = () => {
    alert('¡Gracias por tu compra! 🧾');
    clearCart();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>🧾 Resumen de Orden</h2>
      {cart.length === 0 ? (
        <p>No hay productos en tu orden.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                {item.name} - {item.quantity} x ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total}</h3>
          <button onClick={confirmarCompra}>Confirmar compra</button>
        </>
      )}
    </div>
  );
}

export default Orden;
