import React from 'react';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <div className="erropage__container">
        <h1>404 | Page not found </h1>
        <Link
          to="/"
          className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black font-bold"
        >
          {' '}
          Back to Home
        </Link>
      </div>
    </div>
  );
}
