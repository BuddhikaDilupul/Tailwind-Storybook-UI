import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [] as any[]
}

const atmList = createSlice({
    name: 'atmList',
    initialState,
    reducers: {
        setList: (state, action: PayloadAction<any[]>) => {
            state.list = action.payload;
        },
        addToList: (state, action: PayloadAction<any>) => {
            state.list.push(action.payload);
        },
        removeFromList: (state, action: PayloadAction<string>) => {
            state.list = state.list.filter(item => item.id !== action.payload);
        },
        clearList: (state) => {
            state.list = [];
        }
    }
});

export const {
    setList, addToList, removeFromList, clearList
} = atmList.actions;
export default atmList.reducer;
