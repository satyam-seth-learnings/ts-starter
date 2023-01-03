/* eslint-disable import/prefer-default-export */
export async function fetchPostData(id: number) {
  const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
