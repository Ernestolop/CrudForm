'use client';

import { useState } from 'react';
import { Alert } from '../components';
import { set } from 'mongoose';

export default function Home() {

  //formulario
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [birthDate, setBirthDate] = useState('');

  //alerta
  const [display, setDisplay] = useState(false);
  const [type, setType] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    //validar campos
    if (name === '' || lastName === '' || email === '' || phone === '' || birthDate === '') {
      setType('error');
      setMessage('Todos los campos son requeridos');
      setDisplay(true);
      //Ocultar la alerta luego de 3 segundos
      setTimeout(() => {
        setDisplay(false);
        setType('');
        setMessage('');
      }, 3000);
      return;
    }
  }

  return (
    <main className="p-20">
      <form className="max-w-md mx-auto bg-gray-900 p-6 rounded-md shadow-md text-white">

        <Alert display={display} type={type} message={message} />

        <fieldset className="mb-6">
          <legend className="text-lg font-medium text-center">Información Personal</legend>


          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre</label>
            <input value={name} onChange={e => setName(e.target.value)} type="text" id="name" name="name" className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:border-blue-500" placeholder="Tu nombre" />
          </div>

          <div className="mb-4">
            <label htmlFor="lastName" className="block text-sm font-medium mb-2">Apellido</label>
            <input value={lastName} onChange={e => setLastName(e.target.value)} type="text" id="lastName" name="lastName" className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:border-blue-500" placeholder="Tu apellido" />
          </div>


          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} type="email" id="email" name="email" className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:border-blue-500" placeholder="correo@example.com" />
          </div>


          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">Celular</label>
            <input value={phone} onChange={e => setPhone(e.target.value)} type="tel" id="phone" name="phone" className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:border-blue-500" placeholder="595 971 257580" />
          </div>


          <div className="mb-4">
            <label htmlFor="birthDate" className="block text-sm font-medium mb-2">Fecha de Nacimiento</label>
            <input value={birthDate} onChange={e => setBirthDate(e.target.value)} type="date" id="birthDate" name="birthDate" className="w-full px-4 py-2 rounded-md bg-gray-700 focus:outline-none focus:border-blue-500" />
          </div>

        </fieldset>

        <button onClick={handleSubmit} type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">Enviar</button>
      </form>
    </main>
  )
}
