import React from 'react';
import MarvelApi from '../api/MarvelApi'

const Characters = () => {
  const { data: characters, loading, error } = MarvelApi('characters');
  if (loading) return <div className=' text-center mt-48 mx-auto h-screen items-center'><h4 className=' text-lg'>Loading...</h4><img src="/loading.png" alt='image loading' className=' w-16 text-center mx-auto animate-spin animate-infinite'/></div>;
  if (error) return <div className="text-red-500 text-center mt-48 h-screen">{error}</div>;
  return (
    <div className="container mx-auto px-2 max-w-6xl mt-32">
      <h2 className="text-3xl font-bold mb-10">Marvel characters</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {characters.map((character) => (
          <div key={character.id} className="bg-white gap-3 shadow-lg rounded-lg overflow-hidden hover:shadow-red-500 border hover:border-red-500">
            <img
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={character.name}
              className="w-full h-60 object-cover cursor-pointer relative z-0 scale-110 transition-all duration-300 hover:scale-100"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{character.name}</h3>
              <p className="text-gray-700 mb-4">
                {character.description ? character.description : 'No description available.'}
              </p>
              <a
                href={`${character.urls[0]?.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:underline" >
                Learn more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
