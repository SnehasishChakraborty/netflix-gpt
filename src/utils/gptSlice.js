import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptFlag : false
    },
    reducers: {
        toggleGptFlag : (state) => {
            state.gptFlag = !state.gptFlag;
        }
    }
})

export const {toggleGptFlag} = gptSlice.actions;
export default gptSlice.reducer;