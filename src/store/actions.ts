import {baseUrl} from '../api/api';
import {postsStore} from './store';
import {PostValueInterface} from './store';

export const fetchPosts = async () => {
  const response = await fetch(baseUrl);
  const posts = await response.json();
  postsStore.setPosts(posts);
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
  postsStore.addPost(postToAdd);
};
