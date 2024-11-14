import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ToDos } from '../../models';

export const fetchTodosByUser = createAsyncThunk('todos/fetchTodosByUser', async (userId: number) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);
  return (await response.json()) as ToDos[];
});

export const addTodo = createAsyncThunk(
  'todos/addTodo',
  async ({ userId, title, completed }: { userId: number; title: string; completed: boolean }) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos`, {
      method: 'POST',
      body: JSON.stringify({ userId, title, completed }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });
    return (await response.json()) as ToDos;
  }
);

const todosSlice = createSlice({
  name: 'todos',
  initialState: [] as ToDos[],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodosByUser.fulfilled, (state, action) => action.payload.sort((a, b) => b.id - a.id));
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default todosSlice.reducer;