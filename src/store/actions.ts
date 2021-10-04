import {postsStore} from './store';

const posts = [
  {
    id: 1,
    title: 'Post 1',
    text: 'Post 1 text',
    image: 'http://picsum.photos/200/200/?image=977',
  },
  {
    id: 2,
    title: 'Post 2',
    text: 'Post 2 text',
    image: 'http://picsum.photos/200/200/?image=1',
  },
];
export function fetchPosts(): void {
  postsStore.setPosts(posts);
}
