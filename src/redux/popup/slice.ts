import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { PopupState, PopupItem } from '@/types/popup';

const initialState: PopupState = {
  modalStack: [],
};

const popupSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    openPopup: (state, action: PayloadAction<PopupItem>) => {
      state.modalStack.push(action.payload);
    },
    closePopup: (state) => {
      state.modalStack.pop();
    },
  },
});

export const { openPopup, closePopup } = popupSlice.actions;
export default popupSlice.reducer;
