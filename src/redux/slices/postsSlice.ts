import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Post } from '../../models';


export const fetchPostsByUser = createAsyncThunk('posts/fetchPostsByUser', async (userId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
  const posts = (await response.json()) as Post[];

  const postsWithComments = await Promise.all(
    posts.map(async (post) => {
      const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`);
      const comments = await commentsResponse.json();
      return { ...post, comments };
    })
  );
  return postsWithComments;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: [] as Post[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPostsByUser.fulfilled, (state, action) => action.payload);
  },
});

export default postsSlice.reducer;