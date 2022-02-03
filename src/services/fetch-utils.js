import { checkError, client } from './client';

export async function getFood() {
  const response = await client 
    .from('Food')
    .select();

  return checkError(response);
}
export async function getFighter() {
  const response = await client 
    .from('Fighters')
    .select();

  return checkError(response);
}
export async function getSports() {
  const response = await client 
    .from('Sports')
    .select();

  return checkError(response);
}
export async function getMovies() {
  const response = await client 
    .from('Movies')
    .select();

  return checkError(response);
}