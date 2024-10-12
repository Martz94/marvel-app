import React from 'react';
import MarvelApi from '../api/MarvelApi';

const Comics = () => {
  const { data: comics, loading, error } = MarvelApi('comics');
  if (loading) return <div className=' text-center mt-48 mx-auto h-screen items-center'><h4 className=' text-lg'>Loading...</h4><img src="/loading.png" alt='image loading' className=' w-16 text-center mx-auto animate-spin animate-infinite'/></div>;
  if (error) return <div className="text-red-500 text-center mt-48 h-screen">{error}</div>;

  return (
    <div className="container mx-auto px-2 max-w-6xl mt-32">
      <h2 className="text-3xl font-bold mb-10">Marvel Comics</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comics.map((comic) => (
          <div key={comic.id} className="bg-white shadow-lg gap-3 rounded-lg overflow-hidden hover:shadow-red-500 border hover:border-red-500">
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt={comic.title}
              className="w-full h-60 object-cover cursor-pointer relative z-0 scale-110 transition-all duration-300 hover:scale-100"/>
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

export default Comics;
