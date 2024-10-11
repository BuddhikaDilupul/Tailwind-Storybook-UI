import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  userId:null,
  name: null,
  email:null,
  role:null,
  isAuthenticated:false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<any>) => {
        state.userId = action?.payload?.userId;
        state.name = action?.payload?.name;
        state.email = action?.payload?.email;
        state.role = action?.payload?.role;
        state.isAuthenticated = true;
        
    },
    clearUser: (state) => {
      state.userId = null;
      state.name = null;
      state.email = null;
      state.role = null;
      state.isAuthenticated = false;
    },

  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
