import { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5';

const apiUrl = import.meta.env.VITE_API_URL;
const publicKey = import.meta.env.VITE_PUBLIC_KEY;
const privateKey = import.meta.env.VITE_PRIVATE_KEY;

const axiosInstance = axios.create();
axiosInstance.interceptors.request.use(config => {
  const timestamp = Date.now();
  const hash = md5(`${timestamp}${privateKey}${publicKey}`);
  config.params = {
    ...config.params,
    apikey: publicKey,
    ts: timestamp,
    hash: hash,
  };
  return config;
});

const MarvelApi = (endpoint) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const cacheKey = `marvel-api-${endpoint}`;
      const cachedData = localStorage.getItem(cacheKey);
      if (cachedData) {
        setData(JSON.parse(cachedData));
        setLoading(false);
        return;
      }
      try {
        const response = await axiosInstance.get(`${apiUrl}/${endpoint}`);
        setData(response.data.data.results);
        localStorage.setItem(cacheKey, JSON.stringify(response.data.data.results));
      } catch (error) {
        setError(error.response?.data?.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [endpoint]);
  return { data, loading, error };
};

export default MarvelApi;

