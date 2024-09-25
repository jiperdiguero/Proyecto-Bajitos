import { useLocation, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';

const BookingForm = () => {
  
  const location = useLocation();
  const navigate = useNavigate();
  const { product, selectedDate } = location.state || {};
  const formatterDate = selectedDate.$d;

// Convertir a una cadena formateada
const formattedDate = formatterDate.toLocaleString('es-AR', {
  weekday: 'long', // Día de la semana
  year: 'numeric', // Año
  month: 'long', // Mes completo
  day: 'numeric', // Día del mes
  hour: 'numeric', // Hora
  minute: 'numeric', // Minuto
});

console.log('Final: ',formattedDate); // Esto imprimirá la fecha en el formato deseado

  if (!product || !selectedDate) {
    return <div>No hay información de reserva disponible.</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center p-4 border rounded-lg shadow-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">Reserva para {product.name}</h1>
      <p>Fecha y hora: {formattedDate}</p>
      <TextField label="Nombre Completo" fullWidth className="mb-4" />
      <TextField label="Correo Electrónico" fullWidth className="mb-4" />
      <TextField label="Teléfono" fullWidth className="mb-4" />
      <TextField label="Dirección de Evento" fullWidth className="mb-4" />

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/payment')}
      >
        Confirmar Reserva y Proceder al Pago
      </Button>
    </div>
  );
};

export default BookingForm;
