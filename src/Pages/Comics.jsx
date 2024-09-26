import { useEffect, useState } from 'react';

const Comics = () => {
  const [comics, setComics] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getComics = async () => {
      try {
        const data = await fetchComics();
        setComics(data.data.results);
      } catch (error) {
        setError('Error fetching comics. Please try again later.');
      }
    };
    getComics();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      <h1 className="text-2xl mb-4">Comics</h1>
      <ul>
        {comics.map(comic => (
          <li key={comic.id}>{comic.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Comics;
