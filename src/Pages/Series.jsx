import React from 'react';
import MarvelApi from '../api/MarvelApi';

const Series = () => {
  const { data: movies, loading, error } = MarvelApi('series');
  if (loading) return <div className=' text-center mt-48 mx-auto h-screen items-center'><h4 className=' text-lg'>Loading...</h4><img src="/loading.png" alt='image loading' className=' w-16 text-center mx-auto animate-spin animate-infinite'/></div>;
  if (error) return <div className="text-red-500 text-center mt-48 h-screen">{error}</div>;

  return (
    <div className="container mx-auto px-2 max-w-6xl mt-32">
      <h2 className="text-3xl font-bold mb-10">Marvel Series</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {movies.map((serie) => (
          <div key={serie.id} className=" block xl:flex bg-white gap-3 shadow-lg rounded-lg overflow-hidden hover:shadow-red-500 border hover:border-red-500">
            <img
              src={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
              alt={serie.title}
              className="w-full xl:w-64 h-64 xl:h-full object-cover cursor-pointer relative z-0 scale-110 transition-all duration-300 hover:scale-100" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{serie.title}</h3>
              <p className="text-gray-700 mb-4">
                {serie.description ? serie.description : 'No description available.'}
              </p>
              <a
                href={`${serie.urls[0]?.url}`}
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

export default Series;
