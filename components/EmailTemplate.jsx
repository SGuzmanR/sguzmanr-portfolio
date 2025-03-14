import * as React from 'react';

export const EmailTemplate = ({ firstName, message }) => (
  <div className='font-montserrat bg-black text-white'>
    <div className='text-center mb-6'>
      <h1 className='text-2xl font-bold'>Nuevo Pedido - {firstName}!</h1>
    </div>
    
    <div className=''>
      <p className='text-lg text-gray'>{message}</p>
    </div>
  </div>
);
