import { createSlice } from '@reduxjs/toolkit';

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    contactMessages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.contactMessages.push(action.payload);
    },
  },
});

export const { addMessage } = dataSlice.actions;
export default dataSlice.reducer;
