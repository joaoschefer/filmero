import axios from 'axios';

// base da URL: https://api.themoviedb.org/3/
// URL da API: /movie/now_playing?api_key=576f70fabbffe39d45471b7ea67fea40&language=pt-BR

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
});

export default api;