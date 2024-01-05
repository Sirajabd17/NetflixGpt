import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    moviesResults: null,
    moviesNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptmoviesResult: (state, action) => {
      const { moviesNames, moviesResults } = action.payload;
      state.moviesNames = moviesNames;
      state.moviesResults = moviesResults; // doute
    },
  },
});

export const { toggleGptSearchView, addGptmoviesResult } = gptSlice.actions;
export default gptSlice.reducer;
