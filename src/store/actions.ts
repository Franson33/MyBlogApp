import {postsStore} from './store';

export const fetchPosts = async () => {
  const response = await fetch('http://localhost:3000/posts');
  const posts = await response.json();
  postsStore.setPosts(posts);
};
