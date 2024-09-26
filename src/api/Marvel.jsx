import axios from 'axios';
import md5 from 'md5'; // 

const apiUrl = import.meta.env.VITE_API_URL;
const publicKey = import.meta.env.VITE_PUBLIC_KEY; 
const privateKey = import.meta.env.VITE_PRIVATE_KEY;
const timestamp = Date.now();
const hash = md5(timestamp + privateKey + publicKey);

export const fetchComics = async () => {
  try {
    const response = await axios.get(`${apiUrl}/comics`, {
      params: {
        apikey: publicKey,
        ts: timestamp,
        hash: hash,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching comics:", error);
    throw error;
  }
};


