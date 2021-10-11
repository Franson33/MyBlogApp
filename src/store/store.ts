import * as remx from 'remx';

export interface PostValueInterface {
  id: number;
  title: string;
  text: string;
  image: string;
}

export interface StoreInterface {
  posts: PostValueInterface[];
}

const initialState: StoreInterface = {
  posts: [],
};

const state = remx.state(initialState);

const getters = remx.getters({
  getPosts() {
    return state.posts;
  },
  getPost(id: number) {
    return state.posts.filter(post => post.id === id)[0];
  },
});

const setters = remx.setters({
  setPosts(newPosts: PostValueInterface[]) {
    state.posts = newPosts;
  },
  addPost(newPost: PostValueInterface) {
    [...state.posts, newPost];
  },
  deletePost(id: number) {
    state.posts = state.posts.filter(post => post.id !== id);
  },
  updatePost(post: PostValueInterface) {
    state.posts = state.posts.map(item => {
      return item.id !== post.id
        ? item
        : {
            ...item,
            ...post,
          };
    });
  },
});

export const postsStore = {
  ...getters,
  ...setters,
};
