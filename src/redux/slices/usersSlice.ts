import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models";

export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  return (await response.json()) as User[];
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [] as User[],
    selectedUser: null as User | null,
  },
  reducers: {
    setSelectedUser(state, action: PayloadAction<User>) {
      state.selectedUser = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setSelectedUser  } = usersSlice.actions;
export default usersSlice.reducer;