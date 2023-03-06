import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface titleState {
  titleList: string[];
}

const initialState: titleState = {
  titleList: [],
};

export const titleSlice = createSlice({
  name: "titleList",
  initialState,
  reducers: {
    addTitle: (state, action: PayloadAction<string>) => {
      state.titleList.push(action.payload);
      return state;
    },
    removeTitleByTitle: (state, action: PayloadAction<number>) => {
      state.titleList.splice(action.payload, 1);
      return state;
    },
    removeAll: (state) => {
      state.titleList = [];
      return state;
    },
  },
});

export const { addTitle, removeAll, removeTitleByTitle } = titleSlice.actions;

export default titleSlice.reducer;
