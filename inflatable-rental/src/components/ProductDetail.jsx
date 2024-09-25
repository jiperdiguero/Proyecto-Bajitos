// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider, DateTimePicker } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Button, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProductDetail = ({ product }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const navigate = useNavigate();

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 border rounded-lg shadow-lg bg-white">
      <img src={product.img} alt={product.name} className="w-full md:w-1/3 h-auto object-cover rounded-md mb-4 md:mb-0" />
      <div className="md:ml-8 w-full md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
        <p className="text-lg mb-4">{product.description}</p>
        <p className="text-2xl font-semibold text-blue-600 mb-4">${product.price}</p>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            label="Selecciona fecha y hora"
            value={selectedDate}
            onChange={(newValue) => setSelectedDate(newValue)}            
            TextField={(params) => (
              <TextField
                {...params}
                fullWidth
                className="mb-4"
                variant="outlined"
              />
            )
          }
          />                   
        </LocalizationProvider>

        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => {
            navigate('/booking', { state: { product, selectedDate } });
          }}
        >
          Reservar
        </Button>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired, // Asegúrate de que `img` sea una cadena y sea requerida
    name: PropTypes.string.isRequired, // Asegúrate de que `name` sea una cadena y sea requerida
    description: PropTypes.string, // `description` es opcional pero debe ser una cadena si se proporciona
    price: PropTypes.number.isRequired, // Asegúrate de que `price` sea un número y sea requerido
  }).isRequired, // `product` es requerido en el componente
};

export default ProductDetail;
