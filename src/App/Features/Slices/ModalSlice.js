import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isOpen: false,
  modalContent: {
    title: "Hello user",
    message: "this is a modal",
    type: "info", // info, success, error
  },
  modalProps: {},
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalContent = action.payload.modalContent

    },
    closeModal: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openModal , closeModal } = modalSlice.actions;
export default modalSlice.reducer;