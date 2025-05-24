import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Laptop Gamer ASUS TUF',
    price: 18999,
    image: 'https://picsum.photos/220?random=1'
  },
  {
    id: 2,
    name: 'Mouse Logitech G305',
    price: 499,
    image: 'https://picsum.photos/220?random=2'
  },
  {
    id: 3,
    name: 'Monitor LG 27” FHD IPS',
    price: 3499,
    image: 'https://picsum.photos/220?random=3'
  },
  {
    id: 4,
    name: 'Teclado Mecánico Redragon K552',
    price: 799,
    image: 'https://picsum.photos/220?random=4'
  }
];

function Productos() {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Catálogo de Productos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Productos;
