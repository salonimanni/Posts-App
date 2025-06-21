
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const cached = localStorage.getItem('cached_posts');
  const cachedTime = localStorage.getItem('cache_time');

  if (cached && cachedTime && Date.now() - cachedTime < 15 * 60 * 1000) {
    return JSON.parse(cached);
  }

  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();

  localStorage.setItem('cached_posts', JSON.stringify(data));
  localStorage.setItem('cache_time', Date.now());

  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
