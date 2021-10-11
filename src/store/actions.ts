import * as API from '../api/api';
import {postsStore, PostValueInterface} from './store';

export const fetchPosts = async () => {
  const posts = await API.fetchPosts();
  postsStore.setPosts(posts);
};

export const addPost = async (newPost: PostValueInterface) => {
  const postToAdd = await API.addPost(newPost);
  console.log(postToAdd);

  postsStore.addPost(postToAdd);
};

export const updatePost = async (post: PostValueInterface) => {
  const postToUpdate = await API.updatePost(post);
  postsStore.updatePost(postToUpdate);
};

export const deletePost = async (id: number) => {
  await API.deletePost(id);
  postsStore.deletePost(id);
};
