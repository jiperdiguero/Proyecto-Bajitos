
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';


const productData = {
  
  1: {
    id: 1,
    name: 'Inflable unicornio',
    price: 120,
    img: '../src/img/Inflable-unicornio.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  },
2: {
    id: 2,
    name: 'Inflable acuatico danger-2',
    price: 120,
    img: '../src/img/Inflable-acuatico-danger-2.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  },
3: {
    id: 3,
    name: 'Inflable acuatico deslizador',
    price: 120,
    img: '../src/img/Inflable-acuatico-deslizador.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
4: {
    id: 4,
    name: 'Inflable acuatico obice',
    price: 120,
    img: '../src/img/Inflable-acuatico-obice.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
5: {
    id: 5,
    name: 'Inflable acuatico rampa delfin',
    price: 120,
    img: '../src/img/Inflable-acuatico-rampa-delfin.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
6: {
    id: 6,
    name: 'Inflable aventura',
    price: 120,
    img: '../src/img/Inflable-aventura.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
7: {
    id: 7,
    name: 'Inflable camión',
    price: 120,
    img: '../src/img/Inflable-camion.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  }, 
8: {
    id: 8,
    name: 'nflable carroza',
    price: 120,
    img: '../src/img/Inflable-carroza.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },           
9: {
    id: 9,
    name: 'Inflable cars',
    price: 120,
    img: '../src/img/Inflable-cars.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
10: {
    id: 10,
    name: 'Inflable colchón',
    price: 120,
    img: '../src/img/Inflable-colchón.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
11: {
    id: 11,
    name: 'Inflable dino',
    price: 120,
    img: '../src/img/Inflable-dino.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
12: {
    id: 12,
    name: 'Inflable gusano',
    price: 120,
    img: '../src/img/Inflable-gusano.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
13: {
    id: 13,
    name: 'Inflable obice',
    price: 120,
    img: '../src/img/Inflable-obice.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },   
14: {
    id: 14,
    name: 'Inflable paw patrol',
    price: 120,
    img: '../src/img/Inflable-paw-patrol.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
15: {
    id: 15,
    name: 'Inflable plin plin',
    price: 120,
    img: '../src/img/Inflable-plin-plin.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },              
16: {
    id: 16,
    name: 'Inflable princesa',
    price: 120,
    img: '../src/img/Inflable-princesa.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },                
17: {
    id: 17,
    name: 'Inflable acuatico danger2',
    price: 120,
    img: '../src/img/Inflable-acuatico-danger-2.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  }, 
18: {
    id: 18,
    name: 'Inflable acuatico isla',
    price: 120,
    img: '../src/img/Inflable-acuatico-isla.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  }, 

};

const ProductDetailPage = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const product = productData[id]; // Buscar el producto correspondiente
  
  console.log(product);
  return (
    <div className="container mx-auto p-8">
      <ProductDetail product={product} />
    </div>
  );
};

export default ProductDetailPage;
