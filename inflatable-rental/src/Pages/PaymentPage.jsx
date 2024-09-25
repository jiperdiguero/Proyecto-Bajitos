import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';

const PaymentPage = () => {
  // Inicializar Mercado Pago con tu Public Key
  initMercadoPago('YOUR_PUBLIC_KEY');

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Pago</h1>
      <p>Aquí puedes realizar el pago de tu reserva.</p>
         { { <Wallet initialization={{ preferenceId: 'YOUR_PREFERENCE_ID' }} /> } }
    </div>
  );
};

export default PaymentPage;
