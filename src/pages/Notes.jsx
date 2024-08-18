import { formatDistance } from "date-fns";
import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import UpdatingModal from "./../components/UpdatingModal";

const Notes = () => {
  const initialRange = 6;
  const [viewRange, setViewRange] = useState(() =>
    JSON.parse(localStorage.getItem("range") ?? initialRange)
  );
  const [modal, setModal] = useState(false);
  const [updateConf, setUpdateConf] = useState(false);

  window.onload = () => {
    setViewRange(initialRange);
  };
  localStorage.setItem("range", JSON.stringify(viewRange));
  function rangeHandler() {
    setViewRange((prev) => (prev += 3));
    localStorage.setItem("range", JSON.stringify(viewRange));
  }
  const [editedNote, setEditedNote] = useState({
    id: null,
    title: "",
    description: "",
  });

  const { notes } = useSelector((state) => state.notes);

  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(deleteNote(id));
    toast.success("Deleted successfully.", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
    });
  };

  const updatingModalHandler = (note) => {
    setModal(true);

    note = Object.keys(note)
      .filter((key) => key !== "createdAt")
      .reduce((newNote, key) => {
        newNote[key] = note[key];
        return newNote;
      }, {});

    for (const [key, value] of Object.entries(note)) {
      setEditedNote((prev) => ({ ...prev, [key]: value }));
    }
  };

  useEffect(() => {
    if (updateConf) {
      toast.success("Updated successfully.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setUpdateConf(false);
    }
  }, [updateConf]);

  return (
    <>
      <Helmet>
        <title>Notes</title>
      </Helmet>
      <ToastContainer />
      <div className="container mt-20">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-5">
          {notes.slice(0, viewRange)?.map((note, index) => (
            <div
              className="px-3 py-2 bg-white rounded-md border border-slate-500 shadow-sm"
              key={index}
            >
              <h3 className="text-xl font-bold">{note.title}</h3>
              <p className="text-lg font-normal">{note.description}</p>
              <span className="font-mono text-sm text-slate-500">
                {formatDistance(note.createdAt, new Date(), {
                  addSuffix: true,
                })}
              </span>
              <div className="flex justify-end gap-x-2 mt-2">
                <button
                  className="btn btn-primary"
                  onClick={() => updatingModalHandler(note)}
                >
                  Update
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => handleDelete(note.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {notes.length > viewRange && (
          <button
            className="btn btn-primary block mx-auto"
            onClick={rangeHandler}
          >
            Load more
          </button>
        )}
        {modal && (
          <UpdatingModal
            setModal={setModal}
            editedNote={editedNote}
            setEditedNote={setEditedNote}
            setUpdateConf={setUpdateConf}
          />
        )}
      </div>
    </>
  );
};

export default Notes;
