import { API_URL } from './config';

export async function getAsync<T>(uri: string): Promise<T> {
  const response = await fetch(`${API_URL}/${uri}`);
  if(!response.ok) throw new Error('failed');
  return response.json() as Promise<T>;
}

export async function getCount<int>(uri: string, arr, iterable) {

}
