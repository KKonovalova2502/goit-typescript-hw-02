import axios from 'axios';
import { FetchImagesResponse } from './components/App/App.types';

axios.defaults.baseURL = 'https://api.unsplash.com/';
const ACCESS_KEY = 'nhno4xA-7uS9wT9zGOC3C0YOlVyH7oaBWymn-eyG-Jg';

export const fetchImages = async (topic: string, currentPage: number):Promise<FetchImagesResponse> => {
  console.log(topic);
  const response = await axios.get('search/photos/', {
    params: {
      query: topic,
      page: currentPage,
      per_page: 12,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  return response.data;
};
