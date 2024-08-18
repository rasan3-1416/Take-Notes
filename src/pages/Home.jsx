import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../features/noteSlice";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const [form, setForm] = useState({ title: "", description: "" });
  const [notFilled, setNotFilled] = useState(false);
  const dispatch = useDispatch();

  function formHandler(event) {
    const { name, value } = event.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function submitForm(event) {
    event.preventDefault();
    if (form.title !== "" && form.description !== "") {
      const newNote = {
        id: Date.now().toString(32),
        title: form.title,
        description: form.description,
        createdAt: new Date().toString(),
      };
      setForm({ title: "", description: "" });
      dispatch(addNote(newNote));
      toast.success("Successfully added.", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setNotFilled(false);
    } else {
      toast.error("Please fill up the fields!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setNotFilled(true);
    }
  }
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ToastContainer />
      <div className="container">
        <div className="h-screen flex justify-center items-center">
          <div className="w-[450px] h-fit px-5 py-4 rounded-md shadow-md">
            <div className="text-center mb-4">
              <h1 className="text-2xl font-semibold text-black">
                Add your notes
              </h1>
            </div>
            <form
              className="flex flex-col gap-y-3"
              action=""
              onSubmit={submitForm}
            >
              <input
                className={`w-full p-2 rounded-md border ${
                  notFilled ? "border-red-600" : "border-blue-300"
                } outline-none`}
                type="text"
                placeholder="Title"
                name="title"
                value={form.title}
                onChange={(event) => formHandler(event)}
              />
              <textarea
                className={`w-full p-2 rounded-md border ${
                  notFilled ? "border-red-600" : "border-blue-300"
                } outline-none resize-none`}
                maxLength={400}
                rows={5}
                type="text"
                placeholder="Description"
                name="description"
                value={form.description}
                onChange={(event) => formHandler(event)}
              />
              <button className="w-fit btn btn-primary">Save Note</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
