import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
   noti:null
};

const newReportSlice = createSlice({
  name: "newReport",
  initialState,
  reducers: {
    setNoti: (state, action: PayloadAction<any>) => {
        state.noti = action.payload;
        
    },
    clearNoti: (state) => {
      state.noti = null;
    },

  },
});

export const { setNoti, clearNoti } = newReportSlice.actions;
export default newReportSlice.reducer;
