import type { RootState } from '@/redux/store';

export const selectIsOpen = (state: RootState) => state.popupData.modalStack.length > 0;

export const selectActiveModal = (state: RootState) =>
  state.popupData.modalStack[state.popupData.modalStack.length - 1] ?? null;
