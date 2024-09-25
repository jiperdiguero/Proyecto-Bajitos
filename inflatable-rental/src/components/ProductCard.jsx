
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-md p-4 shadow-lg">
      <img src={product.img} alt={product.name} className="w-full h-auto object-cover rounded-md" />
      <h2 className="text-xl font-semibold mt-4">{product.name}</h2>
      <p className="text-gray-700">{product.description}</p>
      <p className="text-blue-600 text-lg font-bold mt-2">${product.price}</p>
      <Link to={`/product/${product.id}`} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 block text-center">Ver Detalles</Link>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired, // Asegúrate de que `img` sea una cadena y sea requerida
    name: PropTypes.string.isRequired, // Asegúrate de que `name` sea una cadena y sea requerida
    description: PropTypes.string, // `description` es opcional pero debe ser una cadena si se proporciona
    price: PropTypes.number.isRequired, // Asegúrate de que `price` sea un número y sea requerido
  }).isRequired, // `product` es requerido en el componente
};
export default ProductCard;
