import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const introSlice = createSlice({
  name: 'intro',
  initialState: false,
  reducers: {
    setIntroEnd: (_state, action: PayloadAction<boolean>) => {
      return action.payload;
    },
  },
});

export const introReducer = introSlice.reducer;
export const { setIntroEnd } = introSlice.actions;
