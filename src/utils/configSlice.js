import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    addLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { addLang } = configSlice.actions;
export default configSlice.reducer;
