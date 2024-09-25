import ProductCard from '../components/ProductCard';

const products = [
 {
    id: 1,
    name: 'Inflable unicornio',
    price: 120,
    img: '../src/img/Inflable-unicornio.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  },
 {
    id: 2,
    name: 'Inflable acuatico danger',
    price: 120,
    img: '../src/img/Inflable-acuatico-danger.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  },
 {
    id: 3,
    name: 'Inflable acuatico deslizador',
    price: 120,
    img: '../src/img/Inflable-acuatico-deslizador.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 4,
    name: 'Inflable acuatico obice',
    price: 120,
    img: '../src/img/Inflable-acuatico-obice.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 5,
    name: 'Inflable acuatico rampa delfin',
    price: 120,
    img: '../src/img/Inflable-acuatico-rampa-delfin.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 6,
    name: 'Inflable aventura',
    price: 120,
    img: '../src/img/Inflable-aventura.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
 {
    id: 7,
    name: 'Inflable camión',
    price: 120,
    img: '../src/img/Inflable-camion.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  }, 
 {
    id: 8,
    name: 'nflable carroza',
    price: 120,
    img: '../src/img/Inflable-carroza.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },           
 {
    id: 9,
    name: 'Inflable cars',
    price: 120,
    img: '../src/img/Inflable-cars.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
 {
    id: 10,
    name: 'Inflable colchón',
    price: 120,
    img: '../src/img/Inflable-colchón.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 11,
    name: 'Inflable dino',
    price: 120,
    img: '../src/img/Inflable-dino.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 12,
    name: 'Inflable gusano',
    price: 120,
    img: '../src/img/Inflable-gusano.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },
 {
    id: 13,
    name: 'Inflable obice',
    price: 120,
    img: '../src/img/Inflable-obice.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },   
 {
    id: 14,
    name: 'Inflable paw patrol',
    price: 120,
    img: '../src/img/Inflable-paw-patrol.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },  
 {
    id: 15,
    name: 'Inflable plin plin',
    price: 120,
    img: '../src/img/Inflable-plin-plin.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },              
 {
    id: 16,
    name: 'Inflable princesa',
    price: 120,
    img: '../src/img/Inflable-princesa.jpeg',
    description: 'Inflable acuatico deslizador muy divertido para los niños.'
  },                
 {
    id: 17,
    name: 'Inflable acuatico danger 2',
    price: 120,
    img: '../src/img/Inflable-acuatico-danger-2.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  }, 
 {
    id: 18,
    name: 'Inflable acuatico isla',
    price: 120,
    img: '../src/img/Inflable-acuatico-isla.jpeg',
    description: 'Un tobogán inflable súper divertido para los niños.'
  }, 
];



const HomePage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-6xl font-bold text-center mb-8">Nuestros Inflables</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
