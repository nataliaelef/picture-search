import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID c0d172ec0a55e5d32945d9184cbfc2507e21e97e1e3991993fc1551cc1009cbb'
  }
});
