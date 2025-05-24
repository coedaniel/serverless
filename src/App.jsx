import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Productos from './pages/Productos';
import Carrito from './pages/Carrito';
import Orden from './pages/Orden';


function App() {
  return (
    <Router>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Inicio</Link>
        <Link to="/productos" style={styles.link}>Productos</Link>
        <Link to="/carrito" style={styles.link}>Carrito</Link>
        <Link to="/orden" style={styles.link}>Orden</Link>
        {/* Luego agregaremos: Carrito | Orden */}
      </nav>
<main>
      <Routes>
        <Route path="/" element={<h1>Bienvenido a la tienda 🛍️</h1>} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/orden" element={<Orden />} />
      </Routes>
      </main>
    </Router>
  );
}

const styles = {
  nav: {
    display: 'flex',
    gap: '1rem',
    padding: '1rem',
    backgroundColor: '#1f2937',
    color: 'white'
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
};

export default App;
