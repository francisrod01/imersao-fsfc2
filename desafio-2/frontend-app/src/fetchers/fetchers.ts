import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export async function get<T>(
  path: string
): Promise<T> {
  const { data } = await api.get(path);
  return data;
};
