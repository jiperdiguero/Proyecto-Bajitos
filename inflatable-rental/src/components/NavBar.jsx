
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">Alquiler de Inflables 
        <span className='text-6xl font-bold text-black'> Bajitos</span></Link>
        <div>
          <Link to="/" className="mr-4">Inicio</Link>
          <Link to="/booking" className="mr-4">Reservar</Link>
          <Link to="/payment" className="mr-4">Pago</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
