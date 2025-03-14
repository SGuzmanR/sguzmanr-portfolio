import { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState(null);
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    let newErrors = {
      name: !name,
      email: !email || !validateEmail(email),
      message: !message,
    };
    
    setErrors(newErrors);

    const res = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });

    const data = await res.json();
    if (data.error) {
      setStatus('Error al enviar el correo! Por favor intenta de nuevo.');
    } else {
      setStatus('Correo enviado exitosamente!');
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form flex flex-col justify-center items-center gap-6 paddingX w-full h-full py-4" noValidate>
      {/* Name Input */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="floating_name"
          id="floating_name"
          className={`block py-2.5 px-0 w-full text-sm text-gray bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${errors.name ? 'border-red-500' : 'border-gray'} focus:border-black peer`}
          placeholder=" "
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label
          htmlFor="floating_name"
          className="peer-focus:font-medium absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Nombre
        </label>
        {errors.name && <p className="text-red-500 text-xs">Por favor ingrese su nombre.</p>}
      </div>

      {/* Email Input */}
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="email"
          name="floating_email"
          id="floating_email"
          className={`block py-2.5 px-0 w-full text-sm text-gray bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${errors.email ? 'border-red-500' : 'border-gray'} focus:border-black peer`}
          placeholder=" "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label
          htmlFor="floating_email"
          className="peer-focus:font-medium absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Correo Electronico
        </label>
        {errors.email && <p className="text-red-500 text-xs">Por favor ingrese un correo electrónico válido.</p>}
      </div>

      {/* Message Input */}
      <div className="relative z-0 w-full mb-5 group">
        <textarea
          name="floating_message"
          id="floating_message"
          className={`block py-2.5 px-0 w-full text-sm text-gray bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 ${errors.message ? 'border-red-500' : 'border-gray'} focus:border-black peer resize-none`}
          placeholder=" "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <label
          htmlFor="floating_message"
          className="peer-focus:font-medium absolute text-sm text-gray duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Mensaje
        </label>
        {errors.message && <p className="text-red-500 text-xs">Por favor ingrese su mensaje.</p>}
      </div>

      <button
        type="submit"
        className="px-4 py-2 bg-black text-white rounded-xl flex flex-row gap-3 justify-center items-center fill-white border-2 hover:border-black hover:bg-white hover:text-black hover:fill-black transition-colors duration-500"
      >
        Enviar
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width={18} height={18}>
          <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
        </svg>
      </button>

      {status && <p className="text-gray px-4 py-2 text-base rounded-xl">{status}</p>}
    </form>
  );
};
