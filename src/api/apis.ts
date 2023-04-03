import axios from 'axios';

const defaultHeaders = {'content-type': 'application/json'};

export const api = axios.create({
  headers: defaultHeaders,
  timeout: 10000,
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

api.interceptors.request.use(config => {
  config.url += `&appid=${'3ac02a2a549f2335d2a38ba2bb7beae5'}`;
  return config;
});
