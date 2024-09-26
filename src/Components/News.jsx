import React, { useEffect, useState } from 'react';
import axios from 'axios';
import md5 from 'md5';

const apiUrl = import.meta.env.VITE_API_URL;
const publicKey = import.meta.env.VITE_PUBLIC_KEY; 
const privateKey = import.meta.env.VITE_PRIVATE_KEY;

const News = () => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);

  const getHash = () => {
    const timestamp = Date.now();
    const hash = md5(timestamp + privateKey + publicKey);
    return { timestamp, hash };
  };

  const fetchNews = async () => {
    const { timestamp, hash } = getHash();
    try {
      const response = await axios.get(`${apiUrl}/comics`, {
        params: {
          apikey: publicKey,
          ts: timestamp,
          hash: hash,
        },
      });
      setNewsData(response.data.data.results);
    } catch (error) {
      console.error('Error fetching news:', error);
      setError('Error fetching news. Please try again later.');
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold mb-4">Latest Marvel News</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsData.map((news) => (
          <div key={news.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img
              src={`${news.thumbnail.path}.${news.thumbnail.extension}`}
              alt={news.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{news.title}</h3>
              <p className="text-gray-700">{news.description || 'No description available.'}</p>
              <a
                href={`${news.urls[0]?.url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:underline"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
