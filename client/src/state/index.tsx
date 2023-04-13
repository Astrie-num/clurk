import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  mode: "light" | "dark";
  user: any;
  token: any;
  posts: any[];
}

const initialState: AuthState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setLogin: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      state.user.friends = action.payload.friends;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const upadatedPost = state.posts.map((post: any) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
    },
  },
});

export const {setMode, setLogin, setLogout, setFriends, setPosts, setPost} = authSlice.actions

export default authSlice.reducer
