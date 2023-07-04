import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl font-medium text-gray-600">Página no encontrada</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Volver al inicio
      </Link>
    </div>
    </>
  );
}

export {NotFound};
