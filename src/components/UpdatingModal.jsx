import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateNote } from "../features/noteSlice";

const UpdatingModal = ({
  setModal,
  editedNote,
  setEditedNote,
  setUpdateConf,
}) => {
  const dispatch = useDispatch();
  const editedNoteHandler = (event) => {
    const { name, value } = event.target;
    setEditedNote((prev) => ({ ...prev, [name]: value }));
  };

  function updateForm(event) {
    event.preventDefault();
    const updatedValues = {
      id: editedNote.id,
      title: editedNote.title,
      description: editedNote.description,
      createdAt: new Date().toString(),
    };
    dispatch(updateNote(updatedValues));

    setUpdateConf(true);
    setModal(false);
  }
  return (
    <>
      <div className="fixed z-[2000] inset-0 flex justify-center items-center bg-black/40 animate-visable">
        <div className="w-[450px] h-fit px-5 py-4 rounded-md shadow-md bg-white animate-scaledOut">
          <div className="text-center mb-4">
            <h1 className="text-2xl font-semibold text-black">
              Add your notes
            </h1>
          </div>
          <form
            className="flex flex-col gap-y-3"
            action=""
            onSubmit={updateForm}
          >
            <input
              className={`w-full p-2 rounded-md border border-blue-300 outline-none`}
              type="text"
              defaultValue={editedNote.title}
              placeholder="Title"
              name="title"
              onChange={() => editedNoteHandler(event)}
            />
            <textarea
              className={`w-full p-2 rounded-md border border-blue-300 outline-none resize-none`}
              maxLength={400}
              rows={5}
              type="text"
              defaultValue={editedNote.description}
              placeholder="Description"
              name="description"
              onChange={() => editedNoteHandler(event)}
            />
            <div className="flex gap-x-4">
              <button className="w-fit btn btn-primary">Update Note</button>
              <button
                className="w-fit btn btn-tertiary"
                onClick={() => setModal(false)}
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdatingModal;
