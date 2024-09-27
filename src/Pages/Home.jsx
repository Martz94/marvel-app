import React from 'react';
import MarvelApi from '../api/MarvelApi';

const Home = () => {
  const { data: comics, loading, error } = MarvelApi('events');
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="container mt-32 xl:mt-36">
      <div className=' bg-zinc-800 py-5 mb-10 right-0 left-0'>
        <h2 className="text-3xl md:text-5xl text-center md:text-start mx-auto md:ms-48 md:me-auto font-bold bg-gradient-to-r from-neutral-500 to-red-900 bg-clip-text text-transparent">
          Marvel Universe
        </h2>
      </div>
      <div className="grid grid-cols-1 gap-6 mx-auto px-4 max-w-6xl">
        <h3 className='text-2xl md:text-3xl font-semibold text-center my-8 underline bg-gradient-to-r from-red-400 to-red-700 bg-clip-text text-transparent'>Latest Marvel News</h3>
        {comics.slice(0, 10).map((comic) => (
          <div key={comic.id} className=" relative block sm:flex bg-white gap-3 shadow-lg rounded-lg overflow-hidden hover:shadow-red-500 border hover:border-red-500">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-full sm:w-60 h-56 sm:h-full object-cover cursor-pointer relative z-0 scale-110 transition-all duration-300 hover:scale-100" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{comic.title}</h3>
              <p className="text-gray-700 mb-4">
                {comic.description ? comic.description : 'No description available.'}
              </p>
              <a
                href={`${comic.urls[0]?.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:underline">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

  