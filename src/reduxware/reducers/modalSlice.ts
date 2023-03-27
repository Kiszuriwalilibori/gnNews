import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ArticleModal } from "../../types";
const initialState = { modal: { isOpen: false } as ArticleModal };

const articleModal = createSlice({
    name: "articleModal",
    initialState,
    reducers: {
        showModal(state, action: PayloadAction<ArticleModal>) {
            state.modal = action.payload;
        },
        hideModal(state) {
            state.modal.isOpen = false;
        },
    },
});
export default articleModal.reducer;
export const { showModal, hideModal } = articleModal.actions;
export const getModal = (state: { articleModal: { modal: ArticleModal } }) => state.articleModal.modal;
