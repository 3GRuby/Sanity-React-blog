import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';

function Home() {
  return (
    <div>
      <section className="flex flex-col items-center justify-center text-center h-screen">
        <h1
          className=" font-bold text-3xl
      tracking-wide mb-5 md: text-6xl lg:text-8xl "
        >
          Kisi
        </h1>
        <button>
          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-black hover: bg-trasparent border-2
      border-black transition-all duration-500 hover:text-black font-bold "
          >
            {' '}
            Read Blog
          </Link>
        </button>
      </section>
      {/* Card Section */}
      <section>
        <div className="card__container">
          <Card />
        </div>
      </section>

      {/* Footer Section */}
      <section>
        <footer className="footer p-4 bg-gray-400">
          &copy; Kisi inc. 2022
        </footer>
      </section>
    </div>
  );
}

export default Home;
