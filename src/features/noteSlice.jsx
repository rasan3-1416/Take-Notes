import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notes: [],
};
const saveNotes = JSON.parse(localStorage.getItem("notes"));
if (saveNotes) {
  initialState.notes = saveNotes;
}

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
    updateNote: (state, action) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload.id);
      state.notes = [action.payload, ...state.notes];
      localStorage.setItem("notes", JSON.stringify(state.notes));
    },
  },
});

export const { addNote, deleteNote, updateNote } = noteSlice.actions;
export default noteSlice.reducer;
