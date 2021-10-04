import * as remx from 'remx';

interface PostValueInterface {
  id: number;
  title: string;
  text: string;
  image: string;
}

interface StoreInterface {
  posts: PostValueInterface[];
}

const initialState: StoreInterface = {
  posts: [],
};

const state = remx.state(initialState);

const getters = remx.getters({
  getPosts: () => state.posts,
});

const setters = remx.setters({
  setPosts: (newPosts: PostValueInterface[]) => (state.posts = newPosts),
});

export const postsStore = {
  ...getters,
  ...setters,
};
