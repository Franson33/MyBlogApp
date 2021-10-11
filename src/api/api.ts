import {PostValueInterface} from '../store/store';

const baseUrl = 'http://localhost:3000/posts';

export const fetchPosts = async () => {
  const response = await fetch(baseUrl);
  const posts = await response.json();
  return posts;
};

export const addPost = async (newPost: PostValueInterface) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newPost),
  });
  const postToAdd = await response.json();
  return postToAdd;
};

export const updatePost = async (post: PostValueInterface) => {
  const response = await fetch(`${baseUrl}/${post.id}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  const postToUpdate = await response.json();
  return postToUpdate;
};

export const deletePost = async (id: number) => {
  await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  });
};
